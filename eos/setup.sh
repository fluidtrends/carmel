#!/bin/bash

DEV_PUBLIC_KEY=EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
DEV_PRIVATE_KEY=5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

PUBLIC_KEY=EOS5LJiasvuv58CBQ5CPG2nSsFSRf31364oVZCKCXRsoiYHWKPSXW
PRIVATE_KEY=5KcvjB9uVMPGTSrioMopKb4Qszxt66pC8SEtw8zwgctPBqSPBUR

CONTRACT_PUBLIC_KEY=EOS8NUnZgzYy7gncPzWxmAaZtfKCMPfAWFreDkQ6mMVjbM6FrJZ5N
CONTRACT_PRIVATE_KEY=5HyopF2qX88SfrEyHmZKXQwtqxYxNHmBEsL4sKTeoZG9jjwyGqx

if ! [ -f "chunky.json" ]; then
  echo "*** [fail] run this from the root project location"
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

if [ -f ".chunky/eos/wallet.password" ]; then
  echo "*** [fail] already setup"
  exit
fi

echo "*** creating the default wallet ..."
cleos wallet create --file .chunky/eos/wallet.password

echo "*** importing development keys ..."
echo $DEV_PRIVATE_KEY | cleos wallet import
echo $PRIVATE_KEY | cleos wallet import
echo $CONTRACT_PRIVATE_KEY | cleos wallet import

echo "*** creating the eosio.token account ..."xs
cleos create account eosio eosio.token $DEV_PUBLIC_KEY

echo "*** creating the carmelmaster account ..."
cleos create account eosio carmelmaster $PUBLIC_KEY

echo "*** creating the carmel.token account ..."
cleos create account carmelmaster carmel.token $CONTRACT_PUBLIC_KEY

cd eos/eosio.token
echo "*** compiling the eosio.token contract ..."
eosio-cpp -I include -o eosio.token.wasm src/eosio.token.cpp --abigen

echo "*** deploying the eosio.token contract ..."
cleos set contract eosio.token . --abi eosio.token.abi -p eosio.token@active

cd ../carmel.token
echo "*** compiling the carmel.token contract ..."
eosio-cpp -o carmel.token.wasm carmel.token.cpp --abigen

cd ../../
echo "*** updating the carmel.token contract ..."
cp -r eos/carmel.token .chunky/eos/contracts
rm -rf eos/carmel.token/carmel.token.wasm

echo "*** unlocking the default wallet ..."
cat .chunky/eos/wallet.password | cleos wallet unlock &> /dev/null

echo "*** deploying the carmel.token contract ..."
cleos set contract carmel.token .chunky/eos/contracts/carmel.token --abi carmel.token.abi -p carmel.token@active

echo "*** creating the CARMEL token ..."
cleos push action carmel.token create '["carmelmaster", "7000000000.0000 CARMEL"]' -p carmel.token@active
# cleos -u https://jungle2.cryptolions.io:443 push action carmeltester create '["carmeltester", "7000000000.0000 CARMEL"]' -p carmeltester@active

echo "*** create the EOS token ..."
cleos push action eosio.token create '[ "eosio", "1000000000.0000 EOS"]' -p eosio.token@active

echo "*** creating alice and bob test accounts ..."
cleos create account eosio alice $PUBLIC_KEY
cleos create account eosio bob $PUBLIC_KEY

echo "*** give test accounts 1000 EOS each ..."
cleos push action eosio.token issue '["alice", "1000.0000 EOS", "initial" ]' -p eosio@active
cleos push action eosio.token issue '["bob", "1000.0000 EOS", "initial" ]' -p eosio@active

echo "*** give carmel.token 5000 EOS ..."
cleos push action eosio.token issue '["carmel.token", "5000.0000 EOS", "initial" ]' -p eosio@active

echo "*** give alice 1000 CARMEL ..."
cleos push action carmel.token issue '["alice", "1000.0000 CARMEL", "initial" ]' -p carmelmaster@active
# cleos -u https://jungle2.cryptolions.io:443 push action carmeltester issue '["dancalinescu", "1234.0000 CARMEL", "initial" ]' -p carmeltester@active

echo "*** transfer 50 EOS from alice to bob ..."
cleos push action eosio.token transfer '["alice", "bob", "25.0000 EOS", "m" ]' -p alice@active

echo "*** checking alice, bob and carmel.token EOS balances ..."
cleos get currency balance eosio.token alice EOS
cleos get currency balance eosio.token bob EOS
cleos get currency balance eosio.token carmeltokens EOS

echo "*** checking alice CARMEL balances ..."
cleos get currency balance carmel.token alice CARMEL
# cleos -u https://jungle2.cryptolions.io:443 get currency balance carmel.token dancalinescu CARMEL
