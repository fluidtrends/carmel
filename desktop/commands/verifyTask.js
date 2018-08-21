const path = require('path')
const cypress = require('cypress')

module.exports = () => (event, mainWindow, session, props) => {
  const task = props.command.task
  const spec = `./challenges/${task}/spec.js`

  cypress
      .run({ spec })
      .then((results) => {
        const run = results.runs[0]
        const { state, error } = run.tests[0]

        if (error && state === 'failed') {
          const tip = error.split(':')[0]
          return ({ tip, success: false })
        }

        return ({ success: true })
      })
      .then((result) => {
        mainWindow.webContents.send(props.callId, Object.assign({}, { done: true }, result))
      })
      .catch((error) => {
        mainWindow.webContents.send(props.callId, { error: error.message })
      })
}
