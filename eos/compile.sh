#!/bin/bash

if ! [ -f "chunky.json" ]; then
  echo "[fail] run this from the root project location"
  exit
fi

if [ -d ".chunky/eos/contracts" ]; then
  echo "cleaning the old carmeltokens contract ..."
  rm -rf .chunky/eos/contracts/carmeltokens
fi

cd eos/carmeltokens
echo "compiling the carmeltokens contract ..."
eosio-cpp -o carmeltokens.wasm carmeltokens.cpp --abigen

cd ../../
echo "updating the carmeltokens contract ..."
cp -r eos/carmeltokens .chunky/eos/contracts
rm -rf eos/carmeltokens/carmeltokens.wasm
