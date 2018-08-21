const commands = require('./commands')
const _name = 'carmelstudio'
const Session = require('./session')
const chokidar = require('chokidar')
const { downloadArchive } = require('./utils')

const session = new Session()

const registerCommands = (ipcMain, data, mainWindow) => {
  if (!ipcMain) {
    return
  }

  Object.keys(commands).forEach(command => {
    console.log(`[${_name}] registered ${command} command`)
    ipcMain.on(command, (event, args) => {
      commands[command](event, mainWindow, session, args)
    })
  })

  ipcMain.on('sessionCache', (e, { key, data }) => {
    console.log(`[${_name}] cache ${key}=${data}`)
    session.sessionVault.write(key, data)
  })
}

const start = ({ ipcMain, mainWindow }) => {
  return new Promise((resolve, reject) => {
    console.log(`[${_name}] starting ... `)

    return session.start({ ipcMain, mainWindow })
            .then((data) => {
              registerCommands(ipcMain, data, mainWindow)
              console.log(`[${_name}] started successfully`)
              resolve(data)
            })
            .catch((error) => {
              console.log(`[${_name}] could not start`)
              reject(error)
            })
  })
}

module.exports = start
