#!/bin/bash

sudo apt-get --assume-yes install libsecret-1-dev node-gyp jq
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 8.11.3
nvm alias default 8.11.3

echo ". ~/.bashrc" >> ~/.bash_profile
echo ". ~/context/boot.sh" >> ~/.bash_profile

mkdir ~/.carmel
mkdir ~/products
mkdir ~/templates

chown carmel:carmel ~/.carmel
chown carmel:carmel ~/products
chown carmel:carmel ~/templates

git clone -b template-personal https://github.com/fluidtrends/carmel.git ~/templates/personal
cd ~/templates/personal
mkdir .chunky

npm i --production

mv node_modules ../../
mkdir node_modules
cp -r ../../node_modules/react-dom-chunky node_modules/react-dom-chunky
cp -r ../../node_modules/babel-preset-*/ node_modules

npm i -g chunky-cli@0.9.7
