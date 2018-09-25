const path = require('path')
const { fork } = require('child_process')
const { system } = require('../utils')

const eventHandler = (type) => (event, mainWindow, session, props) => {
  const runningCommand = session.runningCommand(type)

  if (runningCommand) {
    console.log(`Command [${type}] is already running. Refreshing ...`)

    runningCommand.exec.on('message', (data) => {
      event.sender.send(props.callId, data)
    })

    runningCommand.exec.send(Object.assign({}, { refresh: true }, system, props, { session: session.data }))

    return
  }

  const cwd = path.resolve(system.CARMEL_ROOT)
  process.chdir(cwd)

  const processFile = path.resolve(system.CARMEL_ROOT, 'desktop', 'commands', `${type}.js`)
  const p = fork(processFile, { cwd })

  p.on('message', (data) => {
    event.sender.send(props.callId, data)
  })

  p.send(Object.assign({}, { start: true }, system, props, { session: session.data }))

  return p
}

const startProduct = eventHandler('startProduct')
const createProduct = require('./createProduct')(system)
const verifyTask = eventHandler('verifyTask')

module.exports = {
  startProduct, createProduct, verifyTask
}
