#!/bin/bash

if ! [ -f ".carmel.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

echo "*** create the EOS token ..."
cleos push action eosio.token create '[ "eosio", "1000000000.0000 EOS"]' -p eosio.token@active

echo "*** creating the CARMEL token ..."
cleos push action carmeltokens create '["carmeltokens", "7000000000.0000 CARMELD"]' -p carmeltokens@active

echo "*** give test accounts 1000 EOS each ..."
cleos push action eosio.token issue '["alice", "1000.0000 EOS", "initial" ]' -p eosio@active
cleos push action eosio.token issue '["bob", "1000.0000 EOS", "initial" ]' -p eosio@active

echo "*** give carmeltokens 5000 EOS ..."
cleos push action eosio.token issue '["carmeltokens", "5000.0000 EOS", "initial" ]' -p eosio@active

echo "*** give carmelsystem 5000 EOS ..."
cleos push action eosio.token issue '["carmelsystem", "5000.0000 EOS", "initial" ]' -p eosio@active

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

echo "*** bob creates a quest..."
cleos push action carmelsystem newquest '["bob", "quest/test"]' -p bob@active

echo "*** check available quests ..."
cleos get table carmelsystem carmelsystem quests

echo "*** alice starts a quest..."
cleos push action carmelsystem startquest '["alice", 0]' -p alice@active

echo "*** check alice's quests..."
cleos get table carmelsystem alice quests

# echo "*** alice adds effort..."
cleos push action carmelsystem neweffort '["alice", 0, 0, 0, "how about that", "no errors"]' -p alice@active

echo "*** check alice's effort ..."
cleos get table carmelsystem alice effort