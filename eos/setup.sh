#!/bin/bash

DEV_PUBLIC_KEY=EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
DEV_PRIVATE_KEY=5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

PUBLIC_KEY=EOS5LJiasvuv58CBQ5CPG2nSsFSRf31364oVZCKCXRsoiYHWKPSXW
PRIVATE_KEY=5KcvjB9uVMPGTSrioMopKb4Qszxt66pC8SEtw8zwgctPBqSPBUR

if ! [ -f "chunky.json" ]; then
  echo "[fail] run this from the root project location"
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

if [ -f ".chunky/eos/wallet.password" ]; then
  echo "[fail] already setup"
  exit
fi

./eos/compile.sh

if ! [ -d ".chunky/eos/contracts/carmeltokens" ]; then
  echo "[fail] the carmeltokens contract is missing"
  exit
fi

echo "creating carmeltokens wallet ..."
cleos wallet create --file .chunky/eos/wallet.password

echo "importing development key ..."
echo $DEV_PRIVATE_KEY | cleos wallet import
echo $PRIVATE_KEY | cleos wallet import

echo "creating carmeltokens account ..."
cleos create account eosio carmeltokens $PUBLIC_KEY

echo "unlocking the carmeltokens wallet ..."
cat .chunky/eos/wallet.password | cleos wallet unlock

echo "deploying the carmeltokens contract ..."
cleos set contract carmeltokens .chunky/eos/contracts/carmeltokens --abi carmeltokens.abi -p carmeltokens@active

echo "create the CARMEL token ..."
cleos push action carmeltokens create '[ "carmeltokens", "7000000000.0000 CARMEL"]' -p carmeltokens@active

echo "creating the eosio.token account ..."
cleos create account eosio eosio.token $DEV_PUBLIC_KEY

cd eos/eosio.token
echo "compiling the eosio.token contract ..."
eosio-cpp -I include -o eosio.token.wasm src/eosio.token.cpp --abigen

echo "deploying the eosio.token contract ..."
cleos set contract eosio.token . --abi eosio.token.abi -p eosio.token@active

echo "create the EOS token ..."
cleos push action eosio.token create '[ "eosio", "1000000000.0000 EOS"]' -p eosio.token@active

echo "creating test accounts ..."
cleos create account eosio alice $PUBLIC_KEY
cleos create account eosio bob $PUBLIC_KEY

echo "give test accounts 1000 EOS each ..."
cleos push action eosio.token issue '[ "alice", "1000.0000 EOS", "initial" ]' -p eosio@active
cleos push action eosio.token issue '[ "bob", "1000.0000 EOS", "initial" ]' -p eosio@active

echo "transfer 50 EOS from alice to bob ..."
cleos push action eosio.token transfer '[ "alice", "bob", "25.0000 SYS", "m" ]' -p alice@active

echo "give carmeltokens 5000 EOS ..."
cleos push action eosio.token issue '[ "carmeltokens", "5000.0000 EOS", "initial" ]' -p eosio@active

echo "give alice 1000 CARMEL ..."
cleos push action carmeltokens issue '[ "alice", "1000.0000 CARMEL", "initial" ]' -p carmeltokens@active

echo "checking alice, bob and carmeltokens EOS balances ..."
cleos get currency balance eosio.token alice EOS
cleos get currency balance eosio.token bob EOS
cleos get currency balance eosio.token carmeltokens EOS

echo "checking alice CARMEL balances ..."
cleos get currency balance carmeltokens alice CARMEL
