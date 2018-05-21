const chunky = require('react-cloud-chunky')
const period = require('./period')

const filename = __filename

const auth = { limit: 1 }

function executor ({ event, chunk, config }) {
  return new Promise((resolve, reject) => {
    try {
      resolve(period.current())
    } catch (e) {
      resolve(e)
    }
  })
}

module.exports.main = chunky.handler({ executor, filename, auth })
