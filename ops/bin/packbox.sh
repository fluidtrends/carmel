#!/bin/bash

cd ops/boxes
../../../bin/packer build ${1}.json
