#!/bin/bash

pkill keosd
rm -rf ~/eosio-wallet
rm -rf ~/.eos
rm -rf eos/contracts/carmel/carmeltokens/carmeltokens.abi
rm -rf eos/contracts/carmel/carmeltokens/carmeltokens.wasm
rm -rf eos/contracts/carmel/carmelsystem/carmelsystem.abi
rm -rf eos/contracts/carmel/carmelsystem/carmelsystem.wasm
mkdir ~/.eos

keosd --unlock-timeout=4000000 &

pkill nodeos
nodeos \
  -e -p eosio \
  --data-dir ~/.eos/data     \
  --config-dir ~/.eos/config \
  --plugin eosio::producer_plugin      \
  --plugin eosio::chain_plugin         \
  --plugin eosio::chain_api_plugin         \
  --plugin eosio::http_plugin          \
  --plugin eosio::history_api_plugin \
  --plugin eosio::state_history_plugin \
  --contracts-console   \
  --disable-replay-opts \
  --access-control-allow-origin='*' \
  --http-validate-host=false        \
  --verbose-http-errors             \
  --state-history-dir ~/.eos/shpdata \
  --trace-history              \
  --chain-state-history        \
  >> ~/.eos/nodeos.log 2>&1 &

sleep 1

cleos wallet create --file ~/.eos/wallet.password
echo $DEV_PRIVATE_KEY | cleos wallet import
echo $MAIN_PRIVATE_KEY | cleos wallet import
echo $TOKENS_CONTRACT_PRIVATE_KEY | cleos wallet import
echo $SYSTEM_CONTRACTs_PRIVATE_KEY | cleos wallet import

sleep 1

echo "*** creating the accounts ..."

cleos create account eosio eosio.token $DEV_PUBLIC_KEY
cleos create account eosio carmelmaster $MAIN_PUBLIC_KEY
cleos create account carmelmaster carmeltokens $TOKENS_CONTRACT_PUBLIC_KEY
cleos create account carmelmaster carmelsystem $SYSTEM_PUBLIC_KEY

echo "*** give code permissions ..."

cleos set account permission carmeltokens active --add-code
cleos set account permission carmelsystem active --add-code

cd eos/contracts/eos/eosio.token
echo "*** compiling the eosio.token contract ..."
eosio-cpp -I include -o eosio.token.wasm src/eosio.token.cpp --abigen

echo "*** deploying the eosio.token contract ..."
cleos set contract eosio.token . --abi eosio.token.abi -p eosio.token@active

cd ../../carmel
echo "*** compiling the carmeltokens contract ..."
eosio-cpp -I . -o carmeltokens/carmeltokens.wasm carmeltokens/carmeltokens.cpp --abigen

echo "*** deploying the carmeltokens contract locally ..."
cleos set contract carmeltokens carmeltokens --abi carmeltokens.abi -p carmeltokens@active

echo "*** compiling the carmelsystem contract ..."
eosio-cpp -I . -o carmelsystem/carmelsystem.wasm carmelsystem/carmelsystem.cpp --abigen

echo "*** deploying the carmelsystem contract locally ..."
cleos set contract carmelsystem carmelsystem --abi carmelsystem.abi -p carmelsystem@active

echo "*** creating alice and bob test accounts ..."
cleos create account carmelmaster alice $MAIN_PUBLIC_KEY
cleos create account carmelmaster bob $MAIN_PUBLIC_KEY