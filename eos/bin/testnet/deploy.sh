#!/bin/bash

ENDPOINT="https://jungle2.cryptolions.io:443"

if ! [ -f "chunky.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

if ! [ -d ".chunky/eos/testnet/carmeltokens" ]; then
  echo "*** [fail] the carmeltokens contract is missing"
  exit
fi

echo "*** unlocking the wallet ..."
cat .chunky/eos/wallet.password | cleos wallet unlock

echo "*** deploying to the testnet ..."
cleos -u "$ENDPOINT" set contract carmeltokens .chunky/eos/testnet/carmeltokens --abi carmeltokens.abi -p carmeltokens@active
