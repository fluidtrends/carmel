const path = require('path')
const fs = require('fs-extra')
const decompress = require('decompress')
const decompressTarxz = require('decompress-tarxz')
const { app } = require('electron')

const CARMEL_ROOT = app.getAppPath()
const USER_ROOT = app.getPath('userData')
const HOME = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
const CARMEL_HOME = path.resolve(HOME, '.carmel')

const system = {
  USER_ROOT,
  HOME,
  CARMEL_HOME,
  CARMEL_ROOT
}

module.exports = {
  system
}
