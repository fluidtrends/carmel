rm -rf node_modules/wrtc/build/Release
wget -qO- "https://github.com/corwin-of-amber/node-webrtc/releases/download/v0.5.0/wrtc-v0.5.0-napi-v3-darwin-arm64.tar.gz" | tar xz -C node_modules/wrtc/build 