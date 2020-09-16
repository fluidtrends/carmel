  #!/bin/bash

  if ! [ -f ".carmel.json" ]; then
    echo "*** [fail] run this from the root project location"
    exit
  fi

  # echo "*** unlock the wallet ..."
  # cat ~/.eos/wallet.password | cleos wallet unlock

  # echo "*** bob takes a challenge ..."
  # cleos push action carmelsystem trychallenge '["bob", "bobuser1", "firstwebsite"]' -p bob@active

  # echo "*** bob completed a task ..."
  # cleos push action carmelsystem addeffort '["bob", "bobuser1", "firstwebsite", true, "{}"]' -p bob@active

  # echo "*** check bob's progress ..."
  # cleos get table carmelsystem bob progress

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

cleos push action carmeltokens transfer '["alice", "carmelsystem", "2900.0000 CARMEL", "aliceuser1:pro.m:1" ]' -p alice@active
cleos get currency balance carmeltokens alice CARMEL
cleos get currency balance carmeltokens carmelsystem CARMEL
cleos get currency balance carmeltokens carmelcredit CARMEL
# cleos get table carmelsystem carmelsystem users
