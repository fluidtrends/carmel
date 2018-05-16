const chunky = require('react-cloud-chunky')
const Base64 = require('js-base64').Base64

const filename = __filename
const auth = { limit: 1 }

// Carmel Private Sale Address
const address = '0xefE8889a7580d30E0120C8c9f52c2b3F8d16B431'// '0x4E52e804905CC320BF631523a9cb1416B8d613Fb'
const total = 25

const createWallet = (userId, data) => {
  var wallet = Object.assign({}, {
    node: 'wallets'
  }, data, {
    userId,
    join: {
      users: {
        id: userId
      }
    }
  })

  return chunky.firebase.operation('add', wallet)
}

const getWallet = (userId) => {
  return new Promise((resolve, reject) => {
    chunky.firebase.operation('retrieve', { key: `users-wallets/${userId}` })
          .then((wallet) => chunky.firebase.operation('retrieve', { key: `wallets/${wallet._id}` }))
          .then((wallet) => ((!wallet || (Array.isArray(wallet) && wallet.length === 0)) ? resolve() : resolve(wallet)))
          .catch(() => resolve())
  })
}

const updateWallet = (transaction) => {
  const userId = transaction.purchase.userId
  const carmel = transaction.purchase.tokens
  const xp = 0
  const data = { carmel, xp }

  return getWallet(userId).then((wallet) => {
    const start = (wallet ? Promise.resolve() : createWallet(userId, data))

    return start.then(() => chunky.firebase.operation('update', { key: `wallets/${wallet._id}`, carmel: (wallet.carmel + data.carmel) }))
                .then(() => chunky.firebase.operation('update', { key: `users-wallets/${userId}/${wallet._id}`, timestamp: `${Date.now()}` }))
  })
}

const createTransaction = ({ userId, data }) => {
  const transaction = Object.assign({}, {
    node: 'transactions'
  }, data, {
    userId,
    join: {
      users: {
        id: userId
      }
    }
  })

  return chunky.firebase.operation('add', transaction)
}

const createGuestTransaction = ({ data }) => {
  const transaction = Object.assign({}, {
    node: 'credits'
  }, data)

  return chunky.firebase.operation('create', transaction)
}

const sendTransactionReport = ({ transaction, guest, config }) => {
  const email = transaction.purchase.email
  const amount = transaction.purchase.amount
  const currency = transaction.purchase.currency

  const text = Object.keys(transaction).map(key => `${key}: ${transaction[key]}`).join('\n')
  const html = Object.keys(transaction).map(key => `${key}: <strong>${transaction[key]}</strong>`).join('<br/>')
  const subject = `New ${amount} ${currency} ${guest ? 'member' : 'guest'} purchase from ${email}`

  const userHeader = (guest ? `You just got your Carmel Tokens. Awesome! To redeem them, just create a carmel.io account with this email address.` : `Enjoy your new Carmel Tokens!`)
  const userFields = { status: 'Purchase complete.', amount: transaction.purchase.amount, currency: transaction.purchase.currency.toUpperCase(), tokens: transaction.purchase.tokens.toLocaleString('en') }
  const textUser = `${userHeader}\n\n` + Object.keys(userFields).map(key => `${key}: ${userFields[key]}`).join('\n')
  const htmlUser = `${userHeader}<br/><br/>` + Object.keys(userFields).map(key => `${key}: <strong>${userFields[key]}</strong>`).join('<br/>')
  const subjectUser = `Woohoo - purchase complete (${transaction.purchase.tokens.toLocaleString('en')} CARMEL).`

  return chunky.emailer.send({
    to: config.settings.adminEmails,
    from: 'team@carmel.io',
    subject,
    text,
    html
  })
  .then(() => chunky.emailer.send({
    to: [email],
    from: 'team@carmel.io',
    subject: subjectUser,
    text: textUser,
    html: htmlUser
  }))
  .then(() => ({
    message: `Purchase complete (${amount} ${currency}).`,
    status: `done`
  }))
}

const updatePurchase = (transaction, config) => {
  var data = Object.assign({}, transaction.data, transaction.purchase)
  delete data._id

  if (!transaction.purchase.userId) {
    return chunky.firebase.operation('remove', { key: `purchases/${transaction.purchase._id}` })
          .then(() => chunky.firebase.operation('remove', { key: `purchasekeys/${transaction.purchaseKey._id}` }))
          .then(() => createGuestTransaction({ data }))
          .then(() => sendTransactionReport({ transaction, guest: true }))
  }

  return chunky.firebase.operation('remove', { key: `purchases/${transaction.purchase._id}` })
        .then(() => chunky.firebase.operation('remove', { key: `purchasekeys/${transaction.purchaseKey._id}` }))
        .then(() => chunky.firebase.operation('remove', { key: `users-purchases/${transaction.purchase.userId}/${transaction.purchase._id}` }))
        .then(() => createTransaction({ userId: transaction.purchase.userId, data }))
        .then(() => sendTransactionReport({ transaction }))
        .then(() => updateWallet(transaction))
}

const getPurchases = () => {
  return chunky.firebase.operation('retrieve', Object.assign({}, {
    key: 'purchases'
  }))
}

const getPurchaseKeys = (purchases) => {
  return chunky.firebase.operation('retrieve', Object.assign({}, {
    key: 'purchasekeys'
  }))
  .then((purchasekeys) => ({ purchases, purchasekeys }))
}

const filterTransactions = (transactions) => {
  if (!transactions || transactions.length === 0) {
    return []
  }

  var newTransactions = []
  transactions.forEach(transaction => {
    var purchaseKey = Buffer.from(transaction.input.substring(2), 'hex').toString()

    if (purchaseKey.substring(0, 6).toLowerCase() === 'carmel') {
      newTransactions.push(Object.assign({}, transaction, { purchaseKey }))
    }
  })

  return newTransactions
}

const getTransactions = (purchases, purchasekeys, config) => {
  return chunky.etherscan.transactions(config.settings.etherscan.apiKey, { address, total })
               .then((transactions) => filterTransactions(transactions))
               .then((transactions) => ({ transactions, purchases, purchasekeys }))
}

const verifyTransactions = ({ purchases, purchasekeys, transactions, config }) => {
  if (!transactions || transactions.length === 0) {
    return Promise.resolve({ message: 'No new transactions found' })
  }

  const expectedPurchaseKeys = [].concat(Array.isArray(purchasekeys) ? purchasekeys : [purchasekeys])

  if (!expectedPurchaseKeys || expectedPurchaseKeys.length === 0) {
    // No expected keys
    return Promise.resolve({
      message: 'No pending purchases'
    })
  }

  var expectedTransactions = []
  expectedPurchaseKeys.forEach(expectedPurchaseKey => {
    transactions.forEach(transaction => {
      const decodedKey = Base64.decode(transaction.purchaseKey.substring(6))
      if (decodedKey === expectedPurchaseKey._id) {
        try {
          const purchase = JSON.parse(chunky.cipher.decrypt(expectedPurchaseKey.data, config))
          expectedTransactions.push({ data: transaction, purchase, purchaseKey: expectedPurchaseKey })
        } catch (e) {
        }
      }
    })
  })

  if (expectedTransactions.length === 0) {
    return Promise.resolve({
      message: `Found no expected transactions out of ${transactions.length} total.`
    })
  }

  const updates = expectedTransactions.map(expectedTransaction => updatePurchase(expectedTransaction, config))
  const lastEthereumTransaction = transactions[0]

  return Promise.all(updates)
                .then(() => ({
                  expectedTransactions,
                  lastEthereumTransaction,
                  message: `${expectedTransactions.length} new transactions found.`
                }))
}

function executor ({ event, chunk, config }) {
  return getPurchases()
        .then((purchases) => getPurchaseKeys(purchases))
        .then(({ purchases, purchasekeys }) => getTransactions(purchases, purchasekeys, config))
        .then(({ purchases, transactions, purchasekeys }) => verifyTransactions({ purchases, purchasekeys, transactions, config }))
}

module.exports.main = chunky.handler({ executor, filename, auth })
