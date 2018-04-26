const chunky = require('react-cloud-chunky')

const filename = __filename

const auth = {
  limit: 1
}

// Carmel Private Sale Address
const address = '0x4E52e804905CC320BF631523a9cb1416B8d613Fb'
const total = 100

const updateWallets = (transactions, config) => {
  const updates = 'none'
  return ({ transactions, total, address, updates })
}

const sendReport = (result, config) => {
  const text = `${JSON.stringify(result, null, 2)}`
  const html = `${JSON.stringify(result, null, 2)}`

  return chunky.emailer.send({
    to: config.settings.adminEmails,
    from: 'team@carmel.io',
    subject: 'Carmel Transactions Check',
    text,
    html
  })
}

function executor ({ event, chunk, config }) {
  return chunky.etherscan.transactions(config.settings.etherscan.apiKey, { address, total })
        .then((transactions) => updateWallets(transactions, config))
        .then((result) => sendReport(result, config))
}

module.exports.main = chunky.handler({ executor, filename, auth })
