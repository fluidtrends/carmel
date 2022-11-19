#!/usr/bin/env bash
set -e

ENV=prod

print () {
    echo "[carmel:${ENV}] ${1}"
}

ok () {
    echo "[carmel:${ENV}] ✔ ${1}"
}

progress () {
    echo "[carmel:${ENV}] ${1} ..."
}

run () {
    echo "[carmel:${ENV}] ➔ ${1}"
}

error () {
    echo "[carmel ${ENV}] ✘ ${1}"
}

usage() { 
      echo "Usage: [-e dev|test|prod] [status|clean|init|deploy]"
      echo " -h                     Display this help message."
      echo " -e [dev|test|prod]     Set the environment."
      echo " status                 Check the environment."
      echo " clean                  Clean up the environment."
      echo " init                   Initialize the cluster."
      echo " deploy                 Deploy services."
      exit 1
}

while getopts ":h:e:" o; do
    case "${o}" in
        e)
            if ! ([[ "${OPTARG}" == "dev" ]] || [[ "${OPTARG}" == "test" ]] || [[ "${OPTARG}" == "prod" ]]); then 
              echo "Invalid environment"; usage
            fi
            ENV="${OPTARG}"
            ;;
        h)
            usage
            ;;
        *)
            echo "Invalid environment"; usage
            ;;
    esac
done

shift $((OPTIND-1))
CMD=$1
SCRIPT=${CMD}

case "${CMD}" in 
    status)
        SCRIPT="status"
        ;;
    init)
        SCRIPT="init"
        ;;
    clean)
        SCRIPT="clean"
        ;;
    deploy)
        shift $((OPTIND-1))
        shift
        SCRIPT="deploy"
        ;;
    *)
        echo "Invalid command"; usage   
        ;;
esac

echo "****************************** carmel ******************************"
echo
run "Running [${CMD}] command"
echo

__="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd "$__/env/${ENV}"

. "main.config"
. "../../include/functions.sh" --source-only

if [ -f .kubeconfig.yml ]; then 
    export KUBECONFIG=.kubeconfig.yml
fi

. "../../commands/${SCRIPT}.sh"

echo
echo "****************************** carmel ******************************"

