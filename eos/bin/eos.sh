#!/usr/bin/env bash
set -e

__="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd "$(dirname $__)"

CMD=$1
ENV="${2:-dev}"

###############################################################
###########                 LOCAL                   ###########
###############################################################

function seed_local() {
  cleos push action eosio.token create '[ "eosio", "1000000000.0000 EOS"]' -p eosio.token@active
  cleos push action carmeltokens create '["carmeltokens", "7000000000.0000 CARMEL"]' -p carmeltokens@active

  cleos push action carmelsystem addsetting '["carmelsystem", "carmelusd", "1000000"]' -p carmelsystem@active
  cleos push action carmelsystem addsetting '["carmelsystem", "usdeos", "35000"]' -p carmelsystem@active
  cleos push action carmelsystem addsetting '["carmelsystem", "creditshare", "10"]' -p carmelsystem@active

  cleos push action eosio.token issue '["carmeltokens", "5000.0000 EOS", "initial" ]' -p eosio@active
  cleos push action eosio.token issue '["alice", "1000.0000 EOS", "initial" ]' -p eosio@active
  cleos push action eosio.token issue '["bob", "1000.0000 EOS", "initial" ]' -p eosio@active
  cleos push action eosio.token issue '["chris", "1000.0000 EOS", "initial" ]' -p eosio@active

  cleos push action carmeltokens issue '["carmelsystem", "1000000.0000 CARMEL", "initial" ]' -p carmeltokens@active
  cleos push action carmeltokens issue '["carmeltokens", "1000000.0000 CARMEL", "initial" ]' -p carmeltokens@active
  cleos push action carmeltokens issue '["alice", "100000.0000 CARMEL", "initial" ]' -p carmeltokens@active
  cleos push action carmeltokens issue '["bob", "100000.0000 CARMEL", "initial" ]' -p carmeltokens@active
  cleos push action carmeltokens issue '["chris", "100000.0000 CARMEL", "initial" ]' -p carmeltokens@active

  cleos push action carmelsystem newuser '["alice", "alice", "Alice", "1234", "{}"]' -p alice@active
  cleos push action carmelsystem newuser '["bob", "bob", "Bob", "1234", "{}"]' -p bob@active
  cleos push action carmelsystem newuser '["chris", "chris", "Chris", "1234", "{}"]' -p chris@active
  cleos push action carmelsystem newsysadmin '["carmelsystem", "bob"]' -p carmelsystem@active
  cleos push action carmelsystem newadmin '["bob", "bob", "alice"]' -p bob@active

  cleos push action carmelsystem newartifact '["bob", "bob", "papanache", "packer", "{}"]' -p bob@active
  cleos push action carmelsystem newartifact '["bob", "bob", "jayesse", "stack", "{}"]' -p bob@active
  cleos push action carmelsystem newartifact '["bob", "bob", "traista", "bundle", "{}"]' -p bob@active
  cleos push action carmelsystem addartifactv '["bob", "bob", "traista", "1.0.0"]' -p bob@active
  cleos push action carmelsystem addchallenge '["bob", "bob", "traista", "jayesse", "tweaktext", 5, [["markdown", 2]], "{\"title\":\"Change blocks of text on a web page\", \"summary\": \"Locate some blocks of text and change them\"}"]' -p bob@active
  cleos push action carmelsystem addchvers '["bob", "bob", "traista", "tweaktext", "1.0.0"]' -p bob@active
  cleos push action carmelsystem addchallenge '["bob", "bob", "traista", "jayesse", "tweakstrings", 5, [["json", 2]], "{\"title\":\"Change calls to action\", \"summary\": \"Identify some calls to action and change the displayed text\"}"]' -p bob@active
  cleos push action carmelsystem addchvers '["bob", "bob", "traista", "tweakstrings", "1.0.0"]' -p bob@active
  cleos push action carmelsystem addtemplate '["bob", "bob", "traista", "starter", "{}"]' -p bob@active
  cleos push action carmelsystem addtemplatev '["bob", "bob", "traista", "starter", "1.0.0"]' -p bob@active

  cleos push action carmelsystem newplan '[ "carmelsystem", "free", 0, 0, 1]' -p carmelsystem@active
  cleos push action carmelsystem newplan '[ "carmelsystem", "pro.m", 30, 290000, 1]' -p carmelsystem@active
  cleos push action carmelsystem newplan '[ "carmelsystem", "pro.y", 365, 2880000, 1]' -p carmelsystem@active
  cleos push action carmelsystem newplan '[ "carmelsystem", "team.m", 30, 90000, 5]' -p carmelsystem@active
  cleos push action carmelsystem newplan '[ "carmelsystem", "team.y", 365, 840000, 5]' -p carmelsystem@active
}

function stop_dev_server () {
    echo "stop dev server ..."

    if pgrep nodeos; then pkill nodeos; fi
    if pgrep keosd; then pkill keosd; fi

    rm -rf ~/eosio-wallet
    rm -rf ~/.eos
}

function start_dev_server() {
  echo "starting dev server ..."

  if pgrep nodeos; then pkill nodeos; fi
  nodeos \
    -e -p eosio \
    --data-dir ~/.eos/data     \
    --config-dir ~/.eos/config \
    --plugin eosio::producer_plugin      \
    --plugin eosio::chain_plugin         \
    --plugin eosio::chain_api_plugin         \
    --plugin eosio::http_plugin          \
    --plugin eosio::history_api_plugin \
    --plugin eosio::state_history_plugin \
    --contracts-console   \
    --disable-replay-opts \
    --access-control-allow-origin='*' \
    --http-validate-host=false        \
    --verbose-http-errors             \
    --state-history-dir ~/.eos/shpdata \
    --trace-history              \
    --chain-state-history        \
    >> ~/.eos/nodeos.log 2>&1 &
  sleep 1
}

function create_dev_accounts() {
  echo "creating dev accounts ..."

  cleos create account eosio eosio.token $DEV_PUBLIC
  cleos create account eosio carmelmaster $MASTER_ACTIVE
  cleos create account carmelmaster carmeltokens $TOKENS_ACTIVE
  cleos create account carmelmaster carmelsystem $SYSTEM_ACTIVE
  cleos create account carmelmaster alice $ADMIN_ACTIVE
  cleos create account carmelmaster bob $ADMIN_ACTIVE
  cleos create account carmelmaster chris $ADMIN_ACTIVE

  cleos set account permission carmeltokens active --add-code
  cleos set account permission carmelsystem active --add-code
}

###############################################################
###########                 COMMON                  ###########
###############################################################


function info_local() {
  echo "*** users ***"
  cleos get table carmelsystem carmelsystem users

  echo "*** artifacts ***"
  cleos get table carmelsystem carmelsystem artifacts

  echo "*** challenges ***"
  cleos get table carmelsystem carmelsystem challenges

  echo "*** templates ***"
  cleos get table carmelsystem carmelsystem templates
}

function info_live() {
  echo "*** users ***"
  cleos --url $ENDPOINT get table carmelsystem carmelsystem users

  echo "*** artifacts ***"
  cleos --url $ENDPOINT get table carmelsystem carmelsystem artifacts

  echo "*** challenges ***"
  cleos --url $ENDPOINT get table carmelsystem carmelsystem challenges

  echo "*** templates ***"
  cleos --url $ENDPOINT get table carmelsystem carmelsystem templates
}

function info() {
   echo "info for ${ENV_NAME} ..."

  case "$ENV_NAME" in 
    dev)
      info_local
      ;;
    *)
      info_live
      ;;
  esac
}

function seed_test() {
  echo "seeding with test data ..."
  # cleos --url $ENDPOINT push action carmelsystem addartifactv '["chunkymonkey", "chunkymonkey", "traista", "1.1.1"]' -p chunkymonkey@active
  # cleos --url $ENDPOINT push action carmelsystem addtemplatev '["chunkymonkey", "chunkymonkey", "traista", "starter", "1.1.1"]' -p chunkymonkey@active

  # cleos --url $ENDPOINT push action carmelsystem addsetting '["carmelsystem", "maindatahash", "QmWVWrmpwCt1aczgEHKibLvrG1wbpy2zc3z8SdGGuZNQoQ"]' -p carmelsystem@active

  # cleos --url $ENDPOINT set account permission carmeltokens active --add-code
  # cleos --url $ENDPOINT set account permission carmelsystem active --add-code

  # cleos --url $ENDPOINT push action carmeltokens create '["carmeltokens", "7000000000.0000 CARMEL"]' -p carmeltokens@active
  # cleos --url $ENDPOINT push action carmelsystem addsetting '["carmelsystem", "carmelusd", "1000000"]' -p carmelsystem@active
  # cleos --url $ENDPOINT push action carmelsystem addsetting '["carmelsystem", "usdeos", "35000"]' -p carmelsystem@active
  # cleos --url $ENDPOINT push action carmelsystem addsetting '["carmelsystem", "creditshare", "10"]' -p carmelsystem@active
  # cleos --url $ENDPOINT push action carmeltokens issue '["chunkymonkey", "100000.0000 CARMEL", "initial" ]' -p carmeltokens@active
  # cleos --url $ENDPOINT push action carmelsystem newuser '["chunkymonkey", "chunkymonkey", "Chunky", "1234", "{}"]' -p chunkymonkey@active
  # cleos --url $ENDPOINT push action carmelsystem newuser '["chunkymonkey", "chunkyadmin", "Chunky Admin", "1234", "{}"]' -p chunkymonkey@active
  # cleos --url $ENDPOINT push action carmelsystem newsysadmin '["carmelsystem", "chunkyadmin"]' -p carmelsystem@active
  # cleos --url $ENDPOINT push action carmelsystem newadmin '["chunkymonkey", "chunkyadmin", "chunkymonkey"]' -p chunkymonkey@active

  # cleos --url $ENDPOINT push action carmelsystem newartifact '["chunkymonkey", "chunkymonkey", "papanache", "packer", "{}"]' -p chunkymonkey@active
  # cleos --url $ENDPOINT push action carmelsystem newartifact '["chunkymonkey", "chunkymonkey", "jayesse", "stack", "{}"]' -p chunkymonkey@active
  # cleos --url $ENDPOINT push action carmelsystem newartifact '["chunkymonkey", "chunkymonkey", "traista", "bundle", "{}"]' -p chunkymonkey@active
  # cleos --url $ENDPOINT push action carmelsystem addartifactv '["chunkymonkey", "chunkymonkey", "traista", "1.0.1"]' -p chunkymonkey@active
  # cleos --url $ENDPOINT push action carmelsystem addtemplate '["chunkymonkey", "chunkymonkey", "traista", "starter", "{}"]' -p chunkymonkey@active
  # cleos --url $ENDPOINT push action carmelsystem addtemplatev '["chunkymonkey", "chunkymonkey", "traista", "starter", "1.0.0"]' -p chunkymonkey@active
  # cleos --url $ENDPOINT push action carmelsystem addchallenge '["chunkymonkey", "chunkymonkey", "traista", "jayesse", "tweaktext", 5, [["markdown", 2]], "{\"title\":\"Change blocks of text on a web page\", \"summary\": \"Locate some blocks of text and change them\"}"]' -p chunkymonkey@active
  # cleos --url $ENDPOINT push action carmelsystem addchvers '["chunkymonkey", "chunkymonkey", "traista", "tweaktext", "1.0.1"]' -p chunkymonkey@active

  # cleos --url $ENDPOINT push action carmelsystem newplan '[ "carmelsystem", "free", 0, 0, 1]' -p carmelsystem@active
  # cleos --url $ENDPOINT push action carmelsystem newplan '[ "carmelsystem", "pro.m", 30, 290000, 1]' -p carmelsystem@active
  # cleos --url $ENDPOINT push action carmelsystem newplan '[ "carmelsystem", "pro.y", 365, 2880000, 1]' -p carmelsystem@active
  # cleos --url $ENDPOINT push action carmelsystem newplan '[ "carmelsystem", "team.m", 30, 90000, 5]' -p carmelsystem@active
  # cleos --url $ENDPOINT push action carmelsystem newplan '[ "carmelsystem", "team.y", 365, 840000, 5]' -p carmelsystem@active
}

function seed_prod() {
  echo "seeding with production data ..."

  # cleos --url $ENDPOINT set account permission carmeltokens active --add-code
  # cleos --url $ENDPOINT set account permission carmelsystem active --add-code
}

function seed () {
  echo "seeding for ${ENV_NAME} ..."

  case "$ENV_NAME" in 
    dev)
      seed_local
      ;;
    test)
      seed_test
      ;;
    prod)
      seed_prod
      ;;
  esac
}

function import_keys() {  
  for key_raw in $(cat keys/dev.private.keys keys/test.private.keys keys/prod.private.keys); do
    if [ -z "$key_raw" ]; then
      continue;
    fi

    key_name="$(cut -d'=' -f1 <<<"$key_raw")"
    key_val="$(cut -d'=' -f2 <<<"$key_raw")"

    if [ -z "$key_val" ]; then
      continue;
    fi

    echo $key_val  | cleos wallet import
  done
}

function reset_wallet() {
  if pgrep keosd; then pkill keosd; fi

  rm -rf ~/eosio-wallet
  rm -rf ~/.eos
  mkdir ~/.eos
  keosd --unlock-timeout=4000000 &

  cleos wallet create --file ~/.eos/wallet.password
}

function init () {
  . "config/${ENV}.config"
  . "keys/${ENV}.public.keys"
}

function compile_eos() {
  echo "compiling eos for ${ENV_NAME} ..."

  rm -rf contracts/eos/eosio.token/eosio.token.abi
  rm -rf contracts/eos/eosio.token/eosio.token.wasm

  eosio-cpp -I contracts/eos/eosio.token/include -o contracts/eos/eosio.token/eosio.token.wasm contracts/eos/eosio.token/src/eosio.token.cpp --abigen
}  

function compile_tokens() {
  echo "compiling tokens for ${ENV_NAME} ..."

  rm -rf contracts/carmel/carmeltokens/carmeltokens.abi
  rm -rf contracts/carmel/carmeltokens/carmeltokens.wasm

  eosio-cpp "-D${ENV_VAR}" -I . -o contracts/carmel/carmeltokens/carmeltokens.wasm contracts/carmel/carmeltokens/carmeltokens.cpp --abigen
}    

function compile_system() {
  echo "compiling system for ${ENV_NAME} ..."

  rm -rf contracts/carmel/carmelsystem/carmelsystem.abi
  rm -rf contracts/carmel/carmelsystem/carmelsystem.wasm

  eosio-cpp "-D${ENV_VAR}" -I . -o contracts/carmel/carmelsystem/carmelsystem.wasm contracts/carmel/carmelsystem/carmelsystem.cpp --abigen
} 

function deploy_tokens() {
  echo "deploying tokens for ${ENV_NAME} ..."

  cleos set contract ${TOKENS_ACCOUNT_NAME} contracts/carmel/carmeltokens --abi carmeltokens.abi -p ${TOKENS_ACCOUNT_NAME}@active
}    

function deploy_system() {
  echo "deploying system for ${ENV_NAME} ..."

  cleos set contract ${SYSTEM_ACCOUNT_NAME} contracts/carmel/carmelsystem --abi carmelsystem.abi -p ${SYSTEM_ACCOUNT_NAME}@active
}    

function deploy_eos() {
  echo "deploying eos for ${ENV_NAME} ..."

  cleos set contract eosio.token contracts/eos/eosio.token --abi eosio.token.abi -p eosio.token@active
}  

function compile() {
  echo "compiling up for ${ENV_NAME} ..."

  compile_system
  compile_tokens
}

function deploy() {
  echo "deploying for ${ENV_NAME} ..."

  case "$ENV_NAME" in 
    dev)
      deploy_eos
      deploy_system
      deploy_tokens
      ;;
    *)
      cleos --url $ENDPOINT set contract ${SYSTEM_ACCOUNT_NAME} contracts/carmel/carmelsystem --abi carmelsystem.abi -p ${SYSTEM_ACCOUNT_NAME}@active
      cleos --url $ENDPOINT set contract ${TOKENS_ACCOUNT_NAME} contracts/carmel/carmeltokens --abi carmeltokens.abi -p ${TOKENS_ACCOUNT_NAME}@active
      ;;
  esac
}

###############################################################
###########                  EXEC                   ###########
###############################################################

case "$ENV" in 
   dev)
     init 
     ;;
   test)
     init 
     ;;
   prod)
     init 
     ;;
   *)
     echo "Wrong environment (supported: dev, test, prod)"
     exit 1
     ;;
esac

case "$CMD" in
  start)
    reset_wallet
    start_dev_server
    import_keys
    create_dev_accounts
    compile_eos
    deploy_eos
    compile_tokens
    deploy_tokens
    compile_system
    deploy_system
    ;;
  stop)
    stop_dev_server
    ;;
  seed)
    seed
    ;;
  compile)
    compile
    ;;
  deploy)
    deploy
    ;;
  info)
    info
    ;;
  *)
    echo "Wrong command (support: start, compile, deploy)"
    exit 1
    ;;
esac


