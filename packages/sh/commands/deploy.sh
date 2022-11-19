SERVICE=$1
IMAGE_ORG=$2
IMAGE_NAME=$3
IMAGE_VERSION=$4

echo $SERVICE

case "${1}" in 
    relay)
        SERVICE="relay"
        IMAGE_ORG=$RELAY_IMAGE_ORG
        IMAGE_NAME=carmel.relay
        IMAGE_VERSION=$RELAY_IMAGE_VERSION
        ;;
    *)
        error "Unrecognized service"  
        exit 1
        ;;
esac

progress "Deploying ${SERVICE}"
deploy_service $SERVICE $IMAGE_ORG $IMAGE_NAME $IMAGE_VERSION
