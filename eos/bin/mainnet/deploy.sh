#!/bin/bash

ENDPOINT="https://nodes.get-scatter.com:443"

if ! [ -f ".carmel.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

cd
if ! [ -d ".eos/mainnet/carmelsystem" ]; then
  echo "*** [fail] the carmelsystem contract is missing"
  exit
fi

echo "*** deploying to the mainnet ..."
cd .eos/mainnet/carmelsystem
cleos -u "$ENDPOINT" set contract carmelsystem . --abi carmelsystem.abi -p carmelsystem@active