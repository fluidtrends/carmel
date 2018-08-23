const path = require('path')
const cypress = require('cypress')
const { system } = require('../utils')

const fileServerFolder = path.resolve(system.CARMEL_HOME, '.cache', 'desktop')

module.exports = () => (event, mainWindow, session, props) => {
  const task = props.command.task
  const challenge = props.command.challenge
  const product = props.command.product
  const spec = `../challenges/${challenge.id}/${task.id}/spec.js`

  const config = {
    fileServerFolder,
    integrationFolder: '../challenges',
    env: {
      product,
      challenge,
      task,
      root: `../../products/${product.id}`
    }
  }

  cypress
      .run({ spec, config })
      .then((results) => {
        const run = results.runs[0]

        if (!run.tests) {
          return ({ success: false })
        }

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
