#!/bin/bash

DEV_PUBLIC_KEY=EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
DEV_PRIVATE_KEY=5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

MAIN_PUBLIC_KEY=EOS5JDNoKr1jNByPikvE1U8aQcWt37bNuRQV38hKCya4SVCzSwdx8
MAIN_PRIVATE_KEY=5KPfzbvLXbjxmngYH7hD22X5LEQsBZMAXvczCPZxDYVcuJ9TXLY

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
echo $MAIN_PRIVATE_KEY | cleos wallet import
echo $CONTRACT_PRIVATE_KEY | cleos wallet import

echo "*** creating the eosio.token account ..."xs
cleos create account eosio eosio.token $DEV_PUBLIC_KEY

echo "*** creating the carmelmaster account ..."
cleos create account eosio carmelmaster $MAIN_PUBLIC_KEY

echo "*** creating the carmeltokens account ..."
cleos create account carmelmaster carmeltokens $CONTRACT_PUBLIC_KEY

cd eos/eosio.token
echo "*** compiling the eosio.token contract ..."
eosio-cpp -I include -o eosio.token.wasm src/eosio.token.cpp --abigen

echo "*** deploying the eosio.token contract ..."
cleos set contract eosio.token . --abi eosio.token.abi -p eosio.token@active

cd ../carmeltokens
echo "*** compiling the carmeltokens contract ..."
eosio-cpp -o carmeltokens.wasm carmeltokens.cpp --abigen

cd ../../
echo "*** updating the carmeltokens contract ..."
cp -r eos/carmeltokens .chunky/eos/contracts
rm -rf eos/carmeltokens/carmeltokens.wasm

echo "*** unlocking the default wallet ..."
cat .chunky/eos/wallet.password | cleos wallet unlock &> /dev/null

echo "*** deploying the carmeltokens contract locally ..."
cleos set contract carmeltokens .chunky/eos/contracts/carmeltokens --abi carmeltokens.abi -p carmeltokens@active

echo "*** creating the CARMEL token ..."
cleos push action carmeltokens create '["carmeltokens", "7000000000.0000 CARMELD"]' -p carmeltokens@active

echo "*** give carmeltokens code permissions ..."
cleos set account permission carmeltokens active --add-code

echo "*** create the EOS token ..."
cleos push action eosio.token create '[ "eosio", "1000000000.0000 EOS"]' -p eosio.token@active

echo "*** creating alice and bob test accounts ..."
cleos create account carmelmaster alice $MAIN_PUBLIC_KEY
cleos create account carmelmaster bob $MAIN_PUBLIC_KEY

echo "*** give test accounts 1000 EOS each ..."
cleos push action eosio.token issue '["alice", "1000.0000 EOS", "initial" ]' -p eosio@active
cleos push action eosio.token issue '["bob", "1000.0000 EOS", "initial" ]' -p eosio@active

echo "*** give carmeltokens 5000 EOS ..."
cleos push action eosio.token issue '["carmeltokens", "5000.0000 EOS", "initial" ]' -p eosio@active

echo "*** give alice 1000 CARMEL ..."
cleos push action carmeltokens issue '["alice", "1000.0000 CARMELD", "initial" ]' -p carmeltokens@active

echo "*** transfer 50 EOS from alice to bob ..."
cleos push action eosio.token transfer '["alice", "bob", "25.0000 EOS", "m" ]' -p alice@active

echo "*** checking alice, bob and carmeltokens EOS balances ..."
cleos get currency balance eosio.token alice EOS
cleos get currency balance eosio.token bob EOS
cleos get currency balance eosio.token carmeltokens EOS

echo "*** checking alice CARMEL balances ..."
cleos get currency balance carmeltokens alice CARMELD
