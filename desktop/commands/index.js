const path = require('path')
const { fork } = require('child_process')
const { system } = require('../utils')

// require('app-module-path').addPath(path.resolve(system.CARMEL_ROOT, 'node_modules'))

const cwd = path.resolve(system.CARMEL_HOME, '.cache', 'desktop')

const eventHandler = (type) => (event, mainWindow, session, props) => {
  const processFile = path.resolve(system.CARMEL_ROOT, 'desktop', 'commands', `${type}.js`)
  const p = fork(processFile, { cwd })

  p.on('message', (data) => {
    event.sender.send(props.callId, data)
  })

  p.send(Object.assign({}, { start: true }, system, props, { session: session.data }))
}

process.chdir(cwd)

const startProduct = eventHandler('startProduct')
const createProduct = require('./createProduct')(system)
const verifyTask = require('./verifyTask')(system)

module.exports = {
  startProduct, createProduct, verifyTask
}
