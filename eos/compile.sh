#!/bin/bash

if ! [ -f "chunky.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

if [ -d ".chunky/eos/contracts" ]; then
  echo "*** cleaning the old carmel.token contract ..."
  rm -rf .chunky/eos/contracts/carmel.token
fi

cd eos/carmel.token
echo "*** compiling the carmel.token contract ..."
eosio-cpp -o carmel.token.wasm carmel.token.cpp --abigen

cd ../../
echo "*** updating the carmel.token contract ..."
cp -r eos/carmel.token .chunky/eos/contracts
rm -rf eos/carmel.token/carmel.token.wasm
