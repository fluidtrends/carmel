#!/bin/bash

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
      --plugin eosio::chain_api_plugin \
      --plugin eosio::http_plugin \
      --plugin eosio::history_plugin \
      --plugin eosio::history_api_plugin \
      --data-dir .carmel/eos/contracts/eosio/data \
      --config-dir .carmel/eos/contracts/eosio/config \
      --access-control-allow-origin='*' \
      --contracts-console \
      --hard-replay \
      --http-validate-host=false \
      --verbose-http-errors \
      --filter-on='*' >> .chunky/eos/nodeos.log 2>&1 &
fi
