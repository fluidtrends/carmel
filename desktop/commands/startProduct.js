const ipc = require('node-ipc')
const path = require('path')
const {
  exec,
  sh,
  updateContext,
  closeTerminal,
  clientDone,
  CARMEL_HOME,
  startPreview,
  stopPreview,
  terminalExec
} = require('../common')


module.exports = (mainWindow, { callId, command }) => {
  if (sh.exec(`hyper`).code != 0) {
    clientDone(mainWindow, callId, error: 'Could not open the terminal')
    return
  }

  updateContext({ id: command.id })

  mainWindow.on('close', () => {
    closeTerminal()
    stopPreview()
  })

  ipc.connectTo('carmelhyper', () => {
    ipc.of.carmelhyper.on('connect', () => {
      console.log(`connected to carmelhyper`)
      updateContext({ hyper: true })
      terminalExec({ cmd: 'cd', id: 'ssh', args: [CARMEL_HOME, '&&', 'vagrant', 'ssh'] })
    })

    ipc.of.carmelhyper.on('response', ({ from, id, data }) => {
      console.log('response', from, id, data)
      if (id === 'ssh') {
        updateContext({ ssh: true })
        terminalExec({ cmd: 'cd', id: 'compiled', args: [`products/${command.id}`, '&&', 'chunky', 'start', 'web'] })
        return
      }
      
      if (id === 'compiled') {
        console.log('Compiled', command.id)
        updateContext({ preview: true })
        startPreview()
        clientDone(mainWindow, callId)
      }
    })
  })
}
