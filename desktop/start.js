const ipc = require('node-ipc')
const commands = require('./commands')
const { initContext, updateContext, closeTerminal } = require('./common')
const electron = require('electron')

const _name = 'carmelstudio'

const start = ({ mainWindow, ipcMain, ipcRenderer }) => {
  ipc.config.id = _name
  ipc.config.retry = 1500
  ipc.config.silent = true

  console.log(`[${_name}] starting ... `)

  initContext()

  console.log(`[${_name}] initialized context`)

  if (ipcMain) {
    Object.keys(commands).forEach(command => {
      console.log(`[${_name}] registered [${command}] command.`)
      ipcMain.on(command, (event, args) => {
        commands[command](mainWindow, args)
      })
    })
  }

  console.log(`[${_name}] started`)
}

module.exports = start
