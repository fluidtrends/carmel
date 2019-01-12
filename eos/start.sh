#!/bin/bash

if ! [ -f "chunky.json" ]; then
  echo "[fail] run this from the root project location"
  exit
fi

if ! [ -d ".chunky" ]; then
  mkdir .chunky
fi

if ! [ -d ".chunky/eos" ]; then
  mkdir .chunky/eos
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
      --plugin eosio::chain_api_plugin \
      --plugin eosio::http_plugin \
      --plugin eosio::history_plugin \
      --plugin eosio::history_api_plugin \
      --data-dir .chunky/eos/contracts/eosio/data \
      --config-dir .chunky/eos/contracts/eosio/config \
      --access-control-allow-origin='*' \
      --contracts-console \
      --http-validate-host=false \
      --verbose-http-errors \
      --filter-on='*' >> .chunky/eos/nodeos.log 2>&1 &
fi
