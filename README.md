# Laptop

Laptop setup and update script for Mac users

## Installation

**WARNING:** If you want to try this Mac setup script, you should first fork this repository, review the code, and remove things you don’t want or need. Don’t blindly use my settings unless you know what that entails. Use at your own risk!

- Fork this repo
- Change **"greganswer**" to your GitHub username in the [`update`](./update) script
- Edit [`dotfiles/.gitconfig`](./dotfiles/.gitconfig) and any other files in the the [`dotfiles`](./dotfiles) directory
- Edit the [`Brewfile`](./Brewfile) based on desired packages
- Run `curl https://raw.githubusercontent.com/<your-username>/laptop/master/update | bash` from the command line

**NOTE:** No `sudo` required.

**NOTE:** If you don't like curl-ing into bash, you can install git and clone this repo, then run `./update`.

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
