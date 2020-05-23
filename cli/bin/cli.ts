#!/usr/bin/env ts-node-script

const path = require('path')
const slana = require('slana')

process.env.CARMEL_MODE = "ts"
slana.run(path.join(__dirname, '..'))
