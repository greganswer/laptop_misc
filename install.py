#!/usr/bin/env python3

import click
import os
import shutil
import glob
import subprocess
import sys
import getpass
from datetime import datetime


def create_folders():
    """ Create desired folders. """
    click.secho("Creating required folders", bold=True)
    folders = [
        os.path.expanduser("~/code/work"),
        os.path.expanduser("~/code/personal"),
        os.path.expanduser("~/code/vendor"),
    ]
    for folder in folders:
        os.makedirs(folder, exist_ok=True)
    click.secho("Folders created.", fg="green")


def update_homebrew_packages():
    """ Install and update Homebrew as needed. """
    if not command_exists("brew"):
        click.secho("Installing Homebrew", bold=True)
        command = 'yes | ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'
        subprocess.call(command, shell=True)
    try:
        click.secho("\nUpdating Homebrew packages", bold=True)
        execute_command(["brew", "bundle", "check"])
    except subprocess.CalledProcessError as e:
        click.secho(e.stderr, fg="red", file=sys.stderr)
        try:
            execute_command(["brew", "bundle", "install"])
            click.secho("Brew packages are up to date.\n", fg="green")
        except subprocess.CalledProcessError as e:
            click.secho(e.stderr, fg="red", file=sys.stderr)


def symlink_dotfiles():
    """ Symlink the dotfiles into the home directory. """
    click.secho("\nSymlinking dot files", bold=True)
    for source in glob.glob("./dotfiles/*"):
        destination = os.path.expanduser(f"~/.{source.split('/')[-1]}")
        try:
            os.symlink(source, destination)
            click.echo(f"Symlinked {source} to {destination}")
        except FileExistsError:
            pass
    click.secho("Dot files synced.", fg="green")


def setup_zsh():
    """ Update Oh My zsh and initialize zsh if required. """
    click.secho("\nUpdating Oh My zsh", bold=True)
    oh_my_zsh_folder = os.path.expanduser("~/.oh-my-zsh")
    try:
        execute_command(
            [
                "git",
                "clone",
                "git://github.com/robbyrussell/oh-my-zsh.git",
                oh_my_zsh_folder,
            ],
            stderr=subprocess.DEVNULL,
        )
    except subprocess.CalledProcessError:
        execute_command(
            [
                "git",
                "-C",
                oh_my_zsh_folder,
                "pull",
                "--rebase",
                "--stat",
                "origin",
                "master",
            ]
        )
    zsh_path = "/bin/zsh"
    if os.environ["SHELL"] == zsh_path:
        return
    click.secho("\nSetting up Z Shell", bold=True)
    execute_command(["chsh", "-s", zsh_path])
    execute_command(["zsh", "--version"])
    click.secho("Z Shell setup.", fg="green")


def install_bundler():
    """ Install the bundler gem if not present. """
    try:
        execute_command(["gem", "list", "-i", "bundler"], stdout=subprocess.DEVNULL)
    except subprocess.CalledProcessError:
        click.secho("\nInstalling bundler", bold=True)
        execute_command(["gem", "install", "bundler"])


def configure_vs_code():
    """ Symlink VS Code settings from this repository. """
    click.secho("\nConfiguring VS Code", bold=True)
    source = "./settings/vscode.json"
    destination = os.path.expanduser(
        "~/Library/Application Support/Code/User/settings.json"
    )
    os.unlink(destination)
    os.symlink(source, destination)
    click.secho("VS Code configured.", fg="green")


def setup_local_databases():
    """ Initialize local databases if not already running. """
    try:
        subprocess.call("launchctl list | grep postgresql", shell=True)
    except subprocess.CalledProcessError:
        click.secho("\nSetting up local databases", bold=True)
        execute_command(["brew", "services", "start", "postgresql"])
        execute_command(["createdb", getpass.getuser()])


# Helpers


def command_exists(cmd):
    return shutil.which(cmd) is not None


def execute_command(command, stdout=sys.stdout, stderr=sys.stderr):
    subprocess.check_call(command, stdout=stdout, stderr=stderr)


# Main


def main():
    start_time = datetime.now()
    create_folders()
    update_homebrew_packages()
    symlink_dotfiles()
    setup_zsh()
    install_bundler()
    setup_local_databases()
    configure_vs_code()
    duration = str((datetime.now() - start_time)).split(".")[0]
    click.secho(f"\nLaptop setup completed in {duration}", fg="green", bold=True)


if __name__ == "__main__":
    main()
