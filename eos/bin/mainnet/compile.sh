# #!/bin/bash

if ! [ -f ".carmel.json" ]; then
  echo "*** [fail] run this from the root project location"
  exit
fi

if [ -d "~/.eos/mainnet" ]; then
  echo "*** cleaning the old cached mainnet carmeltokens contract ..."
  rm -rf ~/.eos/mainnet
fi
mkdir -p ~/.eos/mainnet

# echo "*** compiling the carmelsystem contract ..."
cd eos/contracts/carmel/carmelsystem
echo "*** compiling the carmelsystem contract ..."
eosio-cpp "-DMAINNET" -I . -R . -o carmelsystem.wasm carmelsystem.cpp --abigen

echo "*** updating the mainnet carmelsystem contract ..."
cd ../
cp -r carmelsystem ~/.eos/mainnet

echo "*** done."
