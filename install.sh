#!/usr/bin/env bash

cd ~
git clone https://github.com/greganswer/laptop
cd laptop
git remote set-url origin git@github.com:greganswer/laptop.git
ssh-keygen
chmod +x tool.py
./tool.py
