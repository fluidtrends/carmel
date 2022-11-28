#!/usr/bin/env bash
set -e

shift $((OPTIND-1))
CMD=$1

if [ ! -f "bin/commands/${CMD}.sh" ]; then 
    echo "Command is not supported"
    exit 1
fi


echo "****************************** carmel.relay ******************************"
echo

__="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd "$(dirname $__)"

. "bin/include/config.sh" --source-only
. "bin/include/functions.sh" --source-only

. "bin/commands/${CMD}.sh"

echo
echo "****************************** carmel.relay ******************************"

