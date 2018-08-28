const fs = require('fs-extra')
const path = require('path')

const jsdom = require('jsdom')
const chai = require('chai')
const enzyme = require('enzyme')
const chaiAsPromised = require('chai-as-promised')
const chaiEnzyme = require('chai-enzyme')
const sinon = require('sinon')
const Adapter = require('enzyme-adapter-react-16')

const CARMEL_HOME = process.env.CARMEL_HOME
const challengeId = process.env.CARMEL_CHALLENGE_ID
const productId = process.env.CARMEL_PRODUCT_ID
const dir = process.env.CARMEL_PRODUCT_DIR
const taskId = process.env.CARMEL_TASK_ID

const readFile = (file) => {
  try {
    const filepath = path.resolve(dir, file)
    const content = fs.readFileSync(filepath, 'utf8')
    const ext = path.extname(filepath)

    return (ext === '.json' ? JSON.parse(content) : content)
  } catch (e) {
    console.log(e)
  }
}

const utils = {
  readFile
}

describe(challengeId, () => {
  var spec

  before(() => {
    spec = require(path.resolve(CARMEL_HOME, '.cache', 'challenges', challengeId, taskId, 'spec.js'))

    chai.use(chaiEnzyme())
    chai.use(chaiAsPromised)
    enzyme.configure({ adapter: new Adapter() })
  })

  after(() => {
  })

  it(taskId, (finished) => {
    try {
      const done = (tip) => {
        if (tip) {
          process.send(Object.assign({}, { done: true, success: false, tip }))
          finished(new Error(tip))
          return
        }
        process.send(Object.assign({}, { done: true, success: true }))
        finished()
      }

      spec({
        chai,
        jsdom,
        enzyme,
        sinon,
        dir,
        challengeId,
        taskId,
        productId,
        utils,
        done
      })
    } catch (error) {
      process.send(Object.assign({}, { done: true, success: false, tip: error.message.split(':')[0] }))
      finished(error)
    }
  })
})
