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

ENV=$1

echo "*** unlocking the wallet ..."
cat .chunky/eos/wallet.password | cleos wallet unlock

if [ "--testnet" = "$ENV" ]; then
  echo "*** deploying to the testnet ..."
  cleos -u "$TESTNET_ENDPOINT" set contract carmeltokens .chunky/eos/contracts/carmeltokens --abi carmeltokens.abi -p carmeltokens@active

  # echo "*** give carmeltokens code permissions ..."
  # cleos -u "$TESTNET_ENDPOINT" set account permission carmeltokens active --add-code
  exit
fi

if [ "--mainnet" = "$ENV" ]; then
  # echo "*** give carmeltokens code permissions ..."
  # cleos -u "$MAINNET_ENDPOINT" set account permission carmeltokens active --add-code
  echo "*** deploying to the mainnet ..."
  cleos -u "$MAINNET_ENDPOINT" set contract carmeltokens .chunky/eos/contracts/carmeltokens --abi carmeltokens.abi -p carmeltokens@active
  exit
fi

echo "*** deploying the carmeltokens contract locally ..."
cleos set contract carmeltokens .chunky/eos/contracts/carmeltokens --abi carmeltokens.abi -p carmeltokens@active
