#!/bin/bash

if ! [ -f ".carmel.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

rm -rf eos/contracts/carmel/carmeltokens/carmeltokens.abi
rm -rf eos/contracts/carmel/carmeltokens/carmeltokens.wasm
rm -rf eos/contracts/carmel/carmelsystem/carmelsystem.abi
rm -rf eos/contracts/carmel/carmelsystem/carmelsystem.wasm

cd eos/contracts/carmel/carmeltokens
echo "*** compiling the carmeltokens contract ..."
eosio-cpp -I=. -R=. -abigen -contract=carmeltokens -o=carmeltokens.wasm carmeltokens.cpp

cd ../carmelsystem
echo "*** compiling the carmelsystem contract ..."
eosio-cpp -I=. -R=. -abigen -contract=carmelsystem -o=carmelsystem.wasm carmelsystem.cpp

echo "*** done."
