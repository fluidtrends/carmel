const chunky = require('react-cloud-chunky')

const filename = __filename

const auth = {
  limit: 1
}

// Carmel Private Sale Address
const address = '0x4E52e804905CC320BF631523a9cb1416B8d613Fb'
const total = 100

function executor ({ event, chunk, config }) {
  return chunky.etherscan.transactions(config.settings.etherscan.apiKey, { address, total })
}

module.exports.main = chunky.handler({ executor, filename, auth })
