# Laptop

- [Laptop](#laptop)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Additional Setup](#additional-setup)
  - [Contributing](#contributing)
  - [License](#license)
  - [Code of Conduct](#code-of-conduct)
  - [References](#references)
    - [Homebrew tools](#homebrew-tools)
    - [Example setup repos](#example-setup-repos)

Laptop setup and update script for Mac users

## Installation

**WARNING:** If you want to try this Mac setup script, you should first fork this repository, review the code, and remove things you don’t want or need. Don’t blindly use my settings unless you know what that entails. Use at your own risk!

If you like everything as it:

    sh -c "$(curl -fsSL https://raw.githubusercontent.com/greganswer/laptop/master/install.sh)"

Otherwise:

1. Fork this repo
2. Edit [`dotfiles/gitconfig`](./dotfiles/gitconfig) and any other files in the the [`dotfiles`](./dotfiles) directory
3. Edit the [`Brewfile`](./Brewfile) based on desired packages
4. `git clone` your fork
5. Change into the directory
6. `chmod +x install.py`
7. `./install.py`

**NOTE:** This script is idempotent and no `sudo` is required.

## Usage

If you want to add a new package or app, search for the package or app using the
formula or cask Homebrew links in the [References](#references) section below
and add it to the [`Brewfile`](./Brewfile) at the root of this repository.

### Additional Setup

Follow [GitHub's SSH instructions](https://help.github.com/en/articles/connecting-to-github-with-ssh)
for SSH setup then edit `~/.ssh/config` to [handle restarts](https://stackoverflow.com/a/41145954)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/greganswer/laptop.
This project is intended to be a safe, welcoming space for collaboration, and
contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org)
code of conduct.

## License

The project is available as open source under the terms of the
[MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in this project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](/CODE_OF_CONDUCT.md).

## References

### Homebrew tools

- https://formulae.brew.sh/formula/
- https://formulae.brew.sh/cask/
- https://github.com/Homebrew/homebrew-bundle
- https://github.com/mas-cli/mas

### Example setup repos

- https://github.com/caseyWebb/laptop
