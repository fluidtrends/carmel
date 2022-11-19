#!/usr/bin/env bash
set -e

if local_image_exists; then
    echo "[!] Did not build container image $IMAGE_PATH because it already exists"
else 
    echo "Building container image $IMAGE_PATH ... "
    npm i
    rm -rf .deploy
    rm -rf lib && tsc
    mkdir .deploy
    cp -r lib .deploy
    cp -r *.json .deploy
    cp -r public .deploy
    cp -r Dockerfile .deploy
    cd .deploy
    
    docker build --platform linux/amd64 -t $IMAGE_PATH .
    echo "Building container image $IMAGE_PATH... "
    echo "[OK] Successfully built container image $IMAGE_PATH"
fi