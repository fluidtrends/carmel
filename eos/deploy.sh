#!/bin/bash

TESTNET_ENDPOINT="https://jungle2.cryptolions.io:443";
TESTNET_ID="e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473"

if ! [ -f "chunky.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

if ! [ -d ".chunky/eos/contracts/carmel.token" ]; then
  echo "*** [fail] the carmel.token contract is missing"
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

TESTNET=$1

if [ "--testnet" = "$TESTNET" ]; then
  echo "*** deploying to the testnet ..."
  cleos -u "$TESTNET_ENDPOINT" set contract carmeltester .chunky/eos/contracts/carmel.token --abi carmel.token.abi -p carmeltester@active
  exit
fi

echo "*** unlocking the wallet ..."
cat .chunky/eos/wallet.password | cleos wallet unlock

echo "*** deploying the carmel.token contract ..."
cleos set contract carmel.token .chunky/eos/contracts/carmel.token --abi carmel.token.abi -p carmelmaster@active
