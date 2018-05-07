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

const createTransactions = (transactions, account) => {
  var total = 0
  const all = transactions.map(t => {
    total = total + t.tokens
    return createTransaction(t, account)
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
