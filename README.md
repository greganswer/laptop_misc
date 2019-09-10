# Laptop

Laptop setup and update script for Mac users

## Installation

**WARNING:** If you want to try this Mac setup script, you should first fork this repository, review the code, and remove things you don’t want or need. Don’t blindly use my settings unless you know what that entails. Use at your own risk!

1. Fork this repo
1. Edit [`dotfiles/gitconfig`](./dotfiles/gitconfig) and any other files in the the [`dotfiles`](./dotfiles) directory
1. Edit the [`Brewfile`](./Brewfile) based on desired packages
1. `git clone` your fork
1. Change into the directory
1. `chmod +x install.py`
1. `./install.py`

**NOTE:** No `sudo` required.

## Usage

If you want to add a new package or app, search for the package or app using the 
formula or cask Homebrew links in the [References](#references) section below 
and add it to the [`Brewfile`](./Brewfile) at the root of this repository.

## Additional Setup

Follow [GitHub's SSH instructions](https://help.github.com/en/articles/connecting-to-github-with-ssh) 
for SSH setup then edit `~/.ssh/config` to [handle restarts](https://stackoverflow.com/a/41145954)

## References

### Homebrew tools

- https://formulae.brew.sh/formula/
- https://formulae.brew.sh/cask/
- https://github.com/Homebrew/homebrew-bundle
- https://github.com/mas-cli/mas

### Example setup repos

- https://github.com/caseyWebb/laptop
