#!/usr/bin/env bash
set -e

if remote_image_exists; then
  echo "[!] Did not push container image $IMAGE_PATH because it already exists remotely"
elif local_image_exists; then
  echo "Pushing container image $IMAGE_PATH... "
  docker push $IMAGE_PATH
  echo "[OK] Successfully pushed container image $IMAGE_PATH"
else 
  echo "[!] Did not push container image $IMAGE_PATH because it does not exist locally"
fi 