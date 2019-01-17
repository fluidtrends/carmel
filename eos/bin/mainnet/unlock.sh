#!/bin/bash

if ! [ -f "chunky.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

echo "*** unlocking the wallet ..."
cat .chunky/eos/wallet.password | cleos wallet unlock
echo "*** done."
