#!/bin/bash

if ! [ -f "chunky.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

if [ -d ".chunky/eos/mainnet" ]; then
  echo "*** cleaning the old cached mainnet carmeltokens contract ..."
  rm -rf .chunky/eos/mainnet
fi

mkdir -p .chunky/eos/mainnet
cd eos/contracts/carmel/carmeltokens
echo "*** compiling the carmeltokens contract ..."
eosio-cpp "--DMAINNET" -o carmeltokens.wasm carmeltokens.cpp --abigen -I.

cd ../../../../
echo "*** updating the mainnet carmeltokens contract ..."
cp -r eos/contracts/carmel/carmeltokens .chunky/eos/mainnet
rm -rf eos/contracts/carmel/carmeltokens/carmeltokens.wasm

echo "*** done."
