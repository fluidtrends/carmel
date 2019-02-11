#!/bin/bash

FILE=.distro.csv

if ! [ -f "$FILE" ]; then
  echo "*** [fail] the distro file is missing"
  exit
fi

ENDPOINT="https://nodes.get-scatter.com:443"

if ! [ -f "chunky.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

if ! [ -d ".chunky/eos/mainnet/carmeltokens" ]; then
  echo "*** [fail] the carmeltokens contract is missing"
  exit
fi

send() {
  INDEX=$1

  AMOUNT="${4}.0000"
  TO=$2
  ACTION="issue"
  ACTION_DATA="[\"$TO\", \"$AMOUNT CARMEL\", \"$MEMO\"]"
  MEMO="token distribution - thanks for believing"

  echo "*** Sending $AMOUNT CARMEL to $TO ($MEMO) ..."
  cleos -u https://nodes.get-scatter.com:443 push action carmeltokens $ACTION "$ACTION_DATA" -p carmeltokens@active
  if [ $? -eq 1 ]; then
    echo  "*** [fail] ***"
    exit
  fi

  sleep 5
  echo "*** Sent."
}

index=0
cat $FILE | while read -r line
do
  eosAddress=$(echo $line | awk -F',' '{printf "%s", $1}' | tr -d '"')
  email=$(echo $line | awk -F',' '{printf "%s", $2}' | tr -d '"')
  amount=$(echo $line | awk -F',' '{printf "%s", $5}' | tr -d '"')

  send $index $eosAddress $email "$amount"

  index=$(($index+1))
done
