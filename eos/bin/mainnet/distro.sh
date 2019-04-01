#!/bin/bash

FILE=distro.csv

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

  AMOUNT="${3}.0000"
  TO=$2
  ACTION="issue"
  MEMO="token distribution - thanks for believing"

  # BALANCE=$(cleos -u https://nodes.get-scatter.com:443 get currency balance carmeltokens $TO | awk '{print $1;}')
  # PERCENTAGE=1
  # AMOUNT=$(bc <<< "scale=4;$BALANCE*($PERCENTAGE/100)")

  # MEMO="Congrats, you just collected a $PERCENTAGE% bonus! Keep buying and holding to collect more bonuses!"

  ACTION_DATA="[\"$TO\", \"$AMOUNT CARMEL\", \"$MEMO\"]"

  if [ ${AMOUNT%\.*} -gt 0 ]; then
    echo "*** Sending $AMOUNT CARMEL to $TO ($MEMO) ..."

    cleos -u https://nodes.get-scatter.com:443 push action carmeltokens $ACTION "$ACTION_DATA" -p carmeltokens@active
    if [ $? -eq 1 ]; then
      echo  "*** [fail] ***"
      exit
    fi

    sleep 1
    echo "*** Sent."
  else
    echo "*** $TO is not a holder yet. ***"
  fi
}

index=0
cat $FILE | while read -r line
do
  eosAddress=$(echo $line | awk -F',' '{printf "%s", $2}' | tr -d '"')
  # email=$(echo $line | awk -F',' '{printf "%s", $2}' | tr -d '"')
  # amount=$(echo $line | awk -F',' '{printf "%s", $2}' | tr -d '"')

  # send $index $eosAddress "$amount"
  send $index $eosAddress

  index=$(($index+1))
done
