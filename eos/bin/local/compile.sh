#!/bin/bash

if ! [ -f ".carmel.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

# cd eos/contracts/carmel/carmeltokens
# echo "*** compiling the carmeltokens contract ..."
# eosio-cpp "-DLOCAL" -I . -o carmeltokens.wasm carmeltokens.cpp --abigen

# cd ../carmelsystem
cd eos/contracts/carmel/carmelsystem
echo "*** compiling the carmelsystem contract ..."
eosio-cpp "-DLOCAL" -I . -R . -o carmelsystem.wasm carmelsystem.cpp --abigen

echo "*** done."
