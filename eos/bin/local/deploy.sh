#!/bin/bash

TESTNET_ENDPOINT="https://jungle2.cryptolions.io:443"
MAINNET_ENDPOINT="https://api.eosnewyork.io"

if ! [ -f "chunky.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

if ! [ -d ".chunky/eos/contracts/carmeltokens" ]; then
  echo "*** [fail] the carmeltokens contract is missing"
  exit
fi

keosd_pid=$(pgrep -x "keosd")
if [ -z "$keosd_pid" ]
then
  echo "*** [fail] keosd is stopped"
  exit
fi

nodeos_pid=$(pgrep -x "nodeos")
if [ -z "$nodeos_pid" ]
then
  echo "*** [fail] nodeos is stopped"
  exit
fi

echo "*** deploying the carmeltokens contract locally ..."
cleos set contract carmeltokens .chunky/eos/contracts/carmeltokens --abi carmeltokens.abi -p carmeltokens@active
