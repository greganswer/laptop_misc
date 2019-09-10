#!/usr/bin/env bash

cd ~
git clone https://github.com/greganswer/laptop
cd laptop
git remote set-url origin git@github.com:greganswer/laptop.git
chmod +x setup.py
./setup.py
