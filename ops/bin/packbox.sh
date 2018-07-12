#!/bin/bash

cd boxes
../bin/packer build ${1}.json
