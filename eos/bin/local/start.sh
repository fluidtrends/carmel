#!/bin/bash

if ! [ -f ".carmel.json" ]; then
  echo "[fail] run this from the root project location"
  exit
fi

if ! [ -d "~/.eos" ]; then
  mkdir ~/.eos
fi

if pgrep -x "keosd" > /dev/null
then
    echo "[ok] keosd is running"
else
    echo "starting keosd ..."
    keosd &
fi

if pgrep -x "nodeos" > /dev/null
then
    echo "[ok] nodeos is running"
else
    echo "starting nodeos ..."

    nodeos -e -p eosio \
      --plugin eosio::producer_plugin \
      --plugin eosio::producer_api_plugin \
      --plugin eosio::chain_api_plugin \
      --plugin eosio::http_plugin \
      --plugin eosio::history_plugin \
      --plugin eosio::history_api_plugin \
      --data-dir ~/.eos/data \
      --config-dir ~/.eos/config \
      --filter-on="*" \
      --access-control-allow-origin='*' \
      --contracts-console \
      --http-validate-host=false \
      --verbose-http-errors >> ~/.eos/nodeos.log 2>&1 &
fi

