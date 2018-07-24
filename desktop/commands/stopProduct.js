const {
  closeTerminal,
  clientDone,
  stopPreview
} = require('../common')

module.exports = (mainWindow, { callId, command }) => {
  closeTerminal()
  stopPreview()
  clientDone(mainWindow, callId)
}
