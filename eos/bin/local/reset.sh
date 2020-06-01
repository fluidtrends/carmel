#!/bin/bash

if ! [ -f ".carmel.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

rm -rf ~/eosio-wallet
rm -rf ~/.eos