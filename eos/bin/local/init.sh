#!/bin/bash

DEV_PUBLIC_KEY=EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
DEV_PRIVATE_KEY=5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

MAIN_PUBLIC_KEY=EOS5JDNoKr1jNByPikvE1U8aQcWt37bNuRQV38hKCya4SVCzSwdx8
MAIN_PRIVATE_KEY=5KPfzbvLXbjxmngYH7hD22X5LEQsBZMAXvczCPZxDYVcuJ9TXLY

CONTRACT_PUBLIC_KEY=EOS8NUnZgzYy7gncPzWxmAaZtfKCMPfAWFreDkQ6mMVjbM6FrJZ5N
CONTRACT_PRIVATE_KEY=5HyopF2qX88SfrEyHmZKXQwtqxYxNHmBEsL4sKTeoZG9jjwyGqx

CONTRACT2_PUBLIC_KEY=EOS7XPrxoJoChR1L8oPTJAa5WGUxRZbWyfwrBwqj6afVUSGWbQYca
CONTRACT2_PRIVATE_KEY=5KNeKYLW4a74v4rQWbARn81wCLFE8fCnqYL3yyW5kErpPucj5Gv

if ! [ -f ".carmel.json" ]; then
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

if [ -f "~/.eos/wallet.password" ]; then
  echo "*** [fail] already setup"
  exit
fi

if ! [ -d "~/.eos" ]; then
  mkdir -p ~/.eos
fi

echo "*** creating the default wallet ..."
cleos wallet create --file ~/.eos/wallet.password

echo "*** importing development keys ..."
echo $DEV_PRIVATE_KEY | cleos wallet import
echo $MAIN_PRIVATE_KEY | cleos wallet import
echo $CONTRACT_PRIVATE_KEY | cleos wallet import
echo $CONTRACT2_PRIVATE_KEY | cleos wallet import

echo "*** creating the eosio.token account ..."
cleos create account eosio eosio.token $DEV_PUBLIC_KEY

echo "*** creating the carmelmaster account ..."
cleos create account eosio carmelmaster $MAIN_PUBLIC_KEY

echo "*** creating the carmeltokens account ..."
cleos create account carmelmaster carmeltokens $CONTRACT_PUBLIC_KEY

echo "*** creating the carmelsystem account ..."
cleos create account carmelmaster carmelsystem $CONTRACT2_PUBLIC_KEY

cd eos/contracts/eos/eosio.token
echo "*** compiling the eosio.token contract ..."
eosio-cpp -I include -o eosio.token.wasm src/eosio.token.cpp --abigen

echo "*** deploying the eosio.token contract ..."
cleos set contract eosio.token . --abi eosio.token.abi -p eosio.token@active

cd ../../carmel/carmeltokens
echo "*** compiling the carmeltokens contract ..."
eosio-cpp "-DLOCAL" -I . -o carmeltokens.wasm carmeltokens.cpp --abigen

echo "*** deploying the carmeltokens contract locally ..."
cleos set contract carmeltokens . --abi carmeltokens.abi -p carmeltokens@active

cd ../carmelsystem
echo "*** compiling the carmelsystem contract ..."
eosio-cpp "-DLOCAL" -I . -o carmelsystem.wasm carmelsystem.cpp --abigen

echo "*** deploying the carmelsystem contract locally ..."
cleos set contract carmelsystem . --abi carmelsystem.abi -p carmelsystem@active

echo "*** give carmeltokens code permissions ..."
cleos set account permission carmeltokens active --add-code

echo "*** give carmelsystem code permissions ..."
cleos set account permission carmelsystem active --add-code

echo "*** creating alice and bob test accounts ..."
cleos create account carmelmaster alice $MAIN_PUBLIC_KEY
cleos create account carmelmaster bob $MAIN_PUBLIC_KEY

