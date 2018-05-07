const chunky = require('react-cloud-chunky')
const Base64 = require('js-base64').Base64

const filename = __filename
const auth = { limit: 1 }

// Carmel Private Sale Address
const address = '0x4E52e804905CC320BF631523a9cb1416B8d613Fb'
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

const updateWallet = (transactions) => {
  const userId = transactions[0].purchase.userId
  var total = 0
  transactions.map(t => (total = total + t.purchase.tokens))
  const data = { carmel: total, xp: 0 }

  return getWallet(userId)
      .then((wallet) => {
        if (!wallet) {
          return createWallet(userId, data)
        }

        return chunky.firebase.operation('update', { key: `wallets/${wallet._id}`, carmel: (wallet.carmel + data.carmel) })
              .then(() => chunky.firebase.operation('update', { key: `users-wallets/${userId}`, timestamp: Date.now() }))
      })
}

const createTransaction = ({ userId, data }) => {
  var transaction = Object.assign({}, {
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

const updatePurchase = (transaction) => {
  const data = Object.assign({}, transaction.data, transaction.purchase)

  return chunky.firebase.operation('remove', { key: `purchases/${transaction.purchase._id}` })
        .then(() => chunky.firebase.operation('remove', { key: `purchasekeys/${transaction.purchaseKey._id}` }))
        .then(() => chunky.firebase.operation('remove', { key: `users-purchases/${transaction.purchase.userId}/${transaction.purchase._id}` }))
        .then(() => createTransaction({ userId: transaction.purchase.userId, data }))
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

const updateAdmin = (data) => {
  return chunky.firebase.operation('update', Object.assign({}, {
    key: 'purchases/_admin'
  }, data))
}

const filterTransactions = (transactions, admin) => {
  if (!transactions || transactions.length === 0) {
    return []
  }

  var newTransactions = []
  transactions.forEach(transaction => {
    var purchaseKey = Buffer.from(transaction.input.substring(2), 'hex').toString()
    var skip = false

    if (admin.lastEthereumTransactionHashes) {
      admin.lastEthereumTransactionHashes.forEach(last => {
        if (last.hash === transaction.hash) {
          skip = true
        }
      })
    }

    if (skip) {
      return
    }

    if (purchaseKey.substring(0, 6).toLowerCase() === 'carmel') {
      newTransactions.push(Object.assign({}, transaction, { purchaseKey }))
    }
  })

  return newTransactions
}

const getTransactions = (purchases, purchasekeys, config) => {
  var admin = Object.assign({}, purchases)

  if (Array.isArray(purchases)) {
    purchases.forEach(purchase => {
      if (purchase._id === '_admin') {
        admin = Object.assign({}, purchase)
      }
    })
  }

  const startBlock = admin.lastEthereumTransaction.blockNumber
  return chunky.etherscan.transactions(config.settings.etherscan.apiKey, { address, total, startBlock })
               .then((transactions) => filterTransactions(transactions, admin))
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
      if (Base64.decode(transaction.purchaseKey.substring(6)) === expectedPurchaseKey._id) {
        try {
          const purchase = JSON.parse(chunky.cipher.decrypt(expectedPurchaseKey.data, config))
          expectedTransactions.push({ data: transaction, purchase, purchaseKey: expectedPurchaseKey })
        } catch (e) {}
      }
    })
  })

  if (expectedTransactions.length === 0) {
    return Promise.resolve({
      message: `Found no expected transactions out of ${transactions.length} total.`
    })
  }

  const updates = expectedTransactions.map(expectedTransaction => updatePurchase(expectedTransaction))
  const lastEthereumTransactionHashes = expectedTransactions.map(transaction => ({
    hash: transaction.hash
  }))

  const lastEthereumTransaction = transactions[0]

  return Promise.all(updates)
                .then(() => updateWallet(expectedTransactions))
                .then(() => updateAdmin({ lastEthereumTransaction, lastEthereumTransactionHashes }))
                .then(() => ({
                  expectedTransactions,
                  lastEthereumTransaction,
                  lastEthereumTransactionHashes,
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
