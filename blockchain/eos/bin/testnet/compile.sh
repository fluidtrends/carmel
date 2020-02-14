#!/bin/bash

if ! [ -f "chunky.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

if [ -d ".chunky/eos/testnet" ]; then
  echo "*** cleaning the old cached testnet carmeltokens contract ..."
  rm -rf .chunky/eos/testnet
fi

mkdir -p .chunky/eos/testnet
cd eos/contracts/carmel/carmeltokens
echo "*** compiling the carmeltokens contract ..."
eosio-cpp "-DTESTNET" -o carmeltokens.wasm carmeltokens.cpp --abigen

cd ../../../../
echo "*** updating the testnet carmeltokens contract ..."
cp -r eos/contracts/carmel/carmeltokens .chunky/eos/testnet
rm -rf eos/contracts/carmel/carmeltokens/carmeltokens.wasm
