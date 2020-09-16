#!/bin/bash

if ! [ -f ".carmel.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

echo "*** unlock the wallet ..."
cat ~/.eos/wallet.password | cleos wallet unlock

cd eos/contracts/carmel/carmeltokens
echo "*** deploying the carmeltokens contract locally ..."
cleos set contract carmeltokens . --abi carmeltokens.abi -p carmeltokens@active

cd ../carmelsystem
echo "*** deploying the carmelsystem contract locally ..."
cleos set contract carmelsystem . --abi carmelsystem.abi -p carmelsystem@active