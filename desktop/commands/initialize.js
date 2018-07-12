const { exec } = require('../common')

module.exports = (mainWindow, args) => {
  exec({ mainWindow, cmd: 'vagrant', args: ['up'], client: args.callId })
}
