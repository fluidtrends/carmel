#!/bin/bash

if ! [ -f "chunky.json" ]; then
  echo "[fail] run this from the root project location"
  exit
fi

if ! [ -d ".chunky/eos/contracts/carmeltokens" ]; then
  echo "[fail] the carmeltokens contract is missing"
  exit
fi

keosd_pid=$(pgrep -x "keosd")
if [ -z "$keosd_pid" ]
then
  echo "[fail] keosd is stopped"
  exit
fi

nodeos_pid=$(pgrep -x "nodeos")
if [ -z "$nodeos_pid" ]
then
  echo "[fail] nodeos is stopped"
  exit
fi

echo "unlocking the carmeltokens wallet ..."
cat .chunky/eos/carmeltokens.password | cleos wallet unlock --name carmeltokens

echo "deploying the carmeltokens contract ..."
cleos set contract carmeltokens .chunky/eos/contracts/carmeltokens --abi carmeltokens.abi -p carmeltokens@active
