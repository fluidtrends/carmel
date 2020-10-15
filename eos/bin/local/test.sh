  #!/bin/bash

  if ! [ -f ".carmel.json" ]; then
    echo "*** [fail] run this from the root project location"
    exit
  fi

  # echo "*** unlock the wallet ..."
  # cat ~/.eos/wallet.password | cleos wallet unlock

  cleos push action carmelsystem trychallenge '["alice", "aliceuser1", "firstwebsite", "1.0.0", "hello"]' -p alice@active
  cleos push action carmelsystem addeffort '["alice", "aliceuser1", "firstwebsite", true, "{}"]' -p alice@active
  cleos get table carmelsystem alice progress
  cleos get table carmelsystem alice effort
  cleos get table carmelsystem carmelsystem users

  # echo "*** check bob's effort ..."
  # cleos get table carmelsystem bob effort

  # echo "*** check validations ..."
  # cleos get table carmelsystem carmelsystem templates

  # echo "*** checking alice CARMEL balance ..."
  # cleos get currency balance carmeltokens alice CARMEL

  # echo "*** checking carmelsystem CARMEL balance ..."
  # cleos get currency balance carmeltokens carmelsystem CARMEL

  # cleos get currency balance carmeltokens carmelsystem CARMEL

  # echo "*** alice signs up a user..."
  # cleos push action carmelsystem newuser '["alice", "a4", "Alie 3", 1, false, "{}"]' -p alice@active

# cleos push action carmeltokens issue '["alice", "10000.0000 CARMEL", "initial" ]' -p carmeltokens@active

# cleos push action eosio.token transfer '["alice", "carmelsystem", ".0000 EOS", "topup" ]' -p alice@active

# cleos push action carmeltokens transfer '["alice", "carmelsystem", "2899.9710 CARMEL", "aliceuser1:pro.m:1" ]' -p alice@active
# cleos get currency balance carmeltokens carmelcredit CARMEL
# cleos get table carmelsystem carmelsystem users

# cleos push action carmelsystem addsetting '["carmelsystem", "tokenprice", "2000000"]' -p carmelsystem@active
# cleos push action eosio.token transfer '["alice", "carmelsystem", "10.5000 EOS", "topup" ]' -p alice@active
# cleos get table carmelsystem carmelsystem settings
# cleos get table carmelsystem carmelsystem topups
# cleos get currency balance carmeltokens alice CARMEL
# cleos get currency balance carmeltokens carmelsystem CARMEL
# cleos get currency balance eosio.token alice EOS
# cleos get currency balance eosio.token carmelsystem EOS
