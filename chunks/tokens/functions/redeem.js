const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const createWallet = (total, account) => {
  const wallet = Object.assign({}, {
    node: 'wallets',
    carmel: total,
    xp: 0
  }, {
    userId: account.user.uid,
    join: {
      users: {
        id: account.user.uid
      }
    }
  })

  return chunky.firebase.operation('add', wallet)
}

const createTransaction = (data, account) => {
  const transaction = Object.assign({}, {
    node: 'transactions'
  }, data, {
    userId: account.user.uid,
    join: {
      users: {
        id: account.user.uid
      }
    }
  })

  return chunky.firebase.operation('add', transaction)
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

  return getWallet(userId)
      .then((wallet) => {
        if (!wallet) {
          return createWallet(userId, data)
        }

        return chunky.firebase.operation('update', { key: `wallets/${wallet._id}`, carmel: (wallet.carmel + data.carmel) })
              .then(() => chunky.firebase.operation('update', { key: `users-wallets/${userId}`, timestamp: Date.now() }))
      })
}

const createTransactions = (transactions, account) => {
  var total = 0
  const all = transactions.map(t => {
    total = total + t.tokens
    return createTransaction(t, account)
           .then(() => updateWallet(t))
           .then(() => chunky.firebase.operation('remove', { key: `guesttransactions/${t._id}` }))
  })

  return Promise.all(all).then(() => ({ total }))
}

const findRedeemableTransactions = ({ account }) => {
  return chunky.firebase.operation('retrieve', {
    key: 'guesttransactions',
    orderBy: 'email',
    equalTo: account.user.email
  })
}

function executor ({ event, chunk, config, account }) {
  return findRedeemableTransactions({ account })
        .then((transactions) => createTransactions(transactions, account))
        .then(({ total }) => createWallet(total, account))
}

module.exports.main = chunky.handler({ executor, filename, auth })
