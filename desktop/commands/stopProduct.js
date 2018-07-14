const {
  closeTerminal,
  clientDone
} = require('../common')

module.exports = (mainWindow, { callId, command }) => {
  closeTerminal()
  clientDone(mainWindow, callId)
}
