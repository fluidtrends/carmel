const browserSync = require('browser-sync')
const chokidar = require('chokidar')
const ipc = require('node-ipc')
const path = require('path')
const {
  exec,
  sh,
  updateContext,
  closeTerminal,
  clientDone,
  terminalExec,
  isTerminalConnected,
  CARMEL_HOME,
  CARMEL_HOME_PRODUCTS
} = require('../common')

module.exports = (mainWindow, { callId, command }) => {
  const browser = browserSync.get(`carmel`)
  browser && browser.exit()
  closeTerminal()
  clientDone(mainWindow, callId)
}
