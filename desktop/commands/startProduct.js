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
  if (sh.exec(`hyper`).code != 0) {
    clientDone(mainWindow, callId, error: 'Could not open the terminal')
    return
  }
    
  const watcher = chokidar.watch(path.resolve(CARMEL_HOME_PRODUCTS, command.id), { persistent: true })
  const browser = browserSync.create(`carmel-${command.id}`)
  
  watcher.on('add', path => browser.reload())
         .on('change', path => browser.reload())
         .on('unlink', path => browser.reload())
         
  ipc.connectTo('carmelhyper', () => {
    ipc.of.carmelhyper.on('connect', () => {
      console.log(`connected to carmelhyper`)
      updateContext({ hyper: true })
      terminalExec({ cmd: "cd", args: [CARMEL_HOME, "&&", "vagrant", "ssh"] })
    })

    ipc.of.carmelhyper.on('response', ({ from, cmd, data }) => {
      if (cmd === 'vagrant ssh') {
        terminalExec({ cmd: "cd", args: [`products/${command.id}`, "&&", "chunky", "start", "web"] })
        browser.init({ server: false, proxy: 'http://localhost:18082' })
        clientDone(mainWindow, callId)
      }
    })
  })

  mainWindow.on('close', () => {
    closeTerminal()
  })
}
