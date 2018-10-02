const path = require('path')
const fs = require('fs-extra')
const Mocha = require('mocha')

const start = ({ command, CARMEL_HOME, CARMEL_ROOT }) => {
  const task = command.task
  const challenge = command.challenge
  const product = command.product

  const dir = path.resolve(CARMEL_HOME, 'products', product.id)

  const specFile = path.resolve(CARMEL_ROOT, 'desktop', 'spec.js')

  process.env.CARMEL_TASK_ID = task.id
  process.env.CARMEL_CHALLENGE_ID = challenge.id
  process.env.CARMEL_PRODUCT_ID = product.id
  process.env.CARMEL_PRODUCT_DIR = dir
  process.env.CARMEL_ROOT = CARMEL_ROOT
  process.env.CARMEL_HOME = CARMEL_HOME
  process.env.CARMEL_PRODUCT_TEMPLATE = product.template

  const mocha = new Mocha({
    timeout: 12000
  })

  mocha.addFile(specFile)
  mocha.run()
}

process.on('message', (data) => {
  if (data && (data.start || data.refresh)) {
    start(data)
    return
  }
})
