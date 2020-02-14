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

TO=$1
AMOUNT=$2
MEMO=$3

if [ -z "$TO" ]; then
  echo "*** [fail] Who do you want to send this to?"
  echo "*** [fail] Usage: ./eos/bin/mainnet/issue.sh [TO] [AMOUNT] [MEMO]"
  exit 1
fi

if [ -z "$AMOUNT" ]; then
  echo "*** [fail] How much do you want to send?"
  echo "*** [fail] Usage: ./eos/bin/mainnet/issue.sh [TO] [AMOUNT] [MEMO]"
  exit 1
fi

if [ -z "$MEMO" ]; then
  echo "*** [fail] Why do you want to send this amount?"
  echo "*** [fail] Usage: ./eos/bin/mainnet/issue.sh [TO] [AMOUNT] [MEMO]"
  exit 1
fi

ACTION="issue"
ACTION_DATA="[\"$TO\", \"$AMOUNT CARMEL\", \"$MEMO\"]"

echo "*** Sending $AMOUNT CARMEL to $TO ($MEMO) ..."
cleos -u https://nodes.get-scatter.com:443 push action carmeltokens $ACTION "$ACTION_DATA" -p carmeltokens@active
echo "*** done."
