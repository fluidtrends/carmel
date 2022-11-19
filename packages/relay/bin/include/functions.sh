IMAGE_PATH=$IMAGE_ORG/$IMAGE_NAME:$IMAGE_VERSION

function remote_image_exists() {
  docker manifest inspect $IMAGE_PATH > /dev/null
  return $?
}

function local_image_exists () {
  if [ -z $(docker images -q $IMAGE_PATH) ]; then 
    return 1
  else 
    return 0
  fi
}