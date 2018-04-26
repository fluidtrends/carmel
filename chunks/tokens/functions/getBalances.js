const chunky = require('react-cloud-chunky')

const filename = __filename

const auth = {
  limit: 1
}

// Carmel Private Sale Address
const address = '0x4E52e804905CC320BF631523a9cb1416B8d613Fb'

// EOS ERC20 Contract Address
const contract = '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0'

function executor ({ event, chunk, config }) {
  return chunky.etherscan.balance(config.settings.etherscan.apiKey, { address })
        .then((eth) => chunky.etherscan.balance(config.settings.etherscan.apiKey, { address, contract })
                      .then((eos) => ({ eos, eth })))
}

module.exports.main = chunky.handler({ executor, filename, auth })
