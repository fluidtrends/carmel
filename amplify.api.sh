#!/bin/bash
set -e
IFS='|'

cd .app
../../awsome/node_modules/@aws-amplify/cli/bin/amplify update auth

