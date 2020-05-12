#!/usr/bin/env bash

# Install Xcode tools
# xcode-select --install

# Install script.

# Install Homebrew and packages
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew install node

# Setup the laptop CLI
cd ~ 
git clone https://github.com/greganswer/laptop
cd laptop
git remote set-url origin git@github.com:greganswer/laptop.git

npm link
laptop setup