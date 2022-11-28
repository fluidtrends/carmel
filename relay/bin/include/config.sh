IMAGE_ORG=fluidtrendshub
IMAGE_NAME=carmel.relay
IMAGE_VERSION=$(cat package.json | grep carmel.relay.image | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')