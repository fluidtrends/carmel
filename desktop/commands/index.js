const path = require('path')
const { fork } = require('child_process')
const { system } = require('../utils')

const eventHandler = (type) => (event, mainWindow, session, props) => {
  const processFile = path.resolve(system.CARMEL_ROOT, 'desktop', 'commands', `${type}.js`)
  const p = fork(processFile, { cwd: path.resolve(system.CARMEL_ROOT, 'desktop') })

  p.on('message', (data) => {
    event.sender.send(props.callId, data)
  })

  p.send(Object.assign({}, { start: true }, system, props, { session: session.data }))
}

process.chdir(path.resolve(system.CARMEL_ROOT, 'desktop'))

const startProduct = eventHandler('startProduct')
const createProduct = require('./createProduct')(system)
const verifyTask = require('./verifyTask')(system)

module.exports = {
  startProduct, createProduct, verifyTask
}
