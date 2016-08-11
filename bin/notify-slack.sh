#!/bin/bash

set -eu
set -o pipefail

TEXT=$*

if [[ $TEXT == "" ]]
then
  echo "No text specified"
  exit 1
fi

ESCAPED_TEXT=$(echo $TEXT | sed 's/"/\"/g' | sed "s/'/\'/g" )
PAYLOAD="{\"text\": \"$ESCAPED_TEXT\"}"

curl \
  -X POST \
  -H 'Content-type: application/json' \
  --data "$PAYLOAD" \
  $SLACK_CHANNEL_ENDPOINT
