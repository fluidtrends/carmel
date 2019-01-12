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

CMD=$1

if [ -z "$CMD" ]; then
  echo "Usage: ./eos/token.sh [create|issue|transfer|balance]"
  exit
fi

echo "unlocking the carmeltokens wallet ..."
cat .chunky/eos/carmeltokens.password | cleos wallet unlock --name carmeltokens &> /dev/null

case $CMD in
  "create")
    echo "creating the carmel token ..."
    cleos push action carmeltokens create '{"issuer":"carmeltokens", "maximum_supply":"7000000000.0000 CARMEL"}' -p carmeltokens@active
    ;;
  "issue")
    echo "issuing carmel tokens ..."
    to=$2
    amount=$3
    memo=$4
    cleos push action carmeltokens issue "{\"to\":\"$to\",\"quantity\":\"$amount CARMEL\",\"memo\":\"$memo\"}" -p carmeltokens@active
    ;;
  "transfer")
    echo "transferring carmel tokens ..."
    from=$2
    to=$3
    amount=$4
    memo=$5
    cleos push action carmeltokens transfer "{\"from\":\"$from\",\"to\":\"$to\",\"quantity\":\"$amount CARMEL\",\"memo\":\"$memo\"}" -p carmeltokens@active
    ;;
  "balance")
    echo "checking carmel balance ..."
    cleos get currency balance carmeltokens $2 CARMEL
    ;;
  *)
    echo "Usage: ./eos/token.sh [create|issue|transfer|balance]"
    ;;
esac
