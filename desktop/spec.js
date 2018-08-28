const fs = require('fs-extra')
const path = require('path')
const deepmerge = require('deepmerge')

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
const productTemplate = process.env.CARMEL_PRODUCT_TEMPLATE
const dir = process.env.CARMEL_PRODUCT_DIR
const taskId = process.env.CARMEL_TASK_ID
const specFile = path.resolve(CARMEL_HOME, '.cache', 'challenges', challengeId, taskId, 'spec.js')
const templateFile = path.resolve(CARMEL_HOME, '.cache', 'templates', `${productTemplate}.json`)

chai.use(chaiEnzyme())
chai.use(chaiAsPromised)
enzyme.configure({ adapter: new Adapter() })

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
  var original

  before(() => {
    try {
      spec = require(specFile)

      const template = JSON.parse(fs.readFileSync(templateFile, 'utf8'))
      const fixtureFile = path.resolve(CARMEL_HOME, '.cache', 'templates', 'fixtures', `${template.fixture}.json`)
      const fixture = JSON.parse(fs.readFileSync(fixtureFile, 'utf8'))

      original = deepmerge.all([fixture, template])
    } catch (e) {
    }
  })

  after(() => {
  })

  it(taskId, (finished) => {
    try {
      const done = (tip) => {
        if (tip) {
          process.send(Object.assign({}, { done: true, success: false, tip, original }))
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
        original,
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
