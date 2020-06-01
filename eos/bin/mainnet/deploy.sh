#!/bin/bash

ENDPOINT="https://nodes.get-scatter.com:443"

if ! [ -f "chunky.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

if ! [ -d ".chunky/eos/mainnet/carmeltokens" ]; then
  echo "*** [fail] the carmeltokens contract is missing"
  exit
fi

echo "*** deploying to the mainnet ..."
cleos -u "$ENDPOINT" set contract carmeltokens .chunky/eos/mainnet/carmeltokens --abi carmeltokens.abi -p carmeltokens@active
