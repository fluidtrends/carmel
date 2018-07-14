#!/bin/bash

ID="$1"
NAME="$2"
TEMPLATE="$3"

mkdir ~/products/${ID}

rsync -av --progress ~/templates/${TEMPLATE}/ ~/products/${ID}/ --exclude .git

jq -r --arg NAME "$NAME" '.info.title = $NAME' ~/products/${ID}/chunky.json | jq -r --arg NAME "$NAME" '.name = $NAME' | jq -r --arg ID "$ID" '.id = $ID' | jq -r --arg TEMPLATE "$TEMPLATE" '.template = $TEMPLATE' > __.json
cat __.json > ~/products/${ID}/chunky.json
rm -rf __.json
