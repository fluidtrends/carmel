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

const createTransactions = (credits, account) => {
  var total = 0

  if (!credits) {
    return Promise.resolve({ total })
  }

  const all = credits.map(t => {
    total = total + t.tokens
    const id = t._id
    delete t._id
    return chunky.firebase.operation('remove', { key: `credits/${id}` })
          .then(() => createTransaction(t, account))
  })

  return Promise.all(all).then((data) => ({ data, total }))
}

const findCredits = ({ account }) => {
  return chunky.firebase.operation('retrieve', {
    key: 'credits',
    orderBy: 'email',
    equalTo: account.user.email
  })
  .then((data) => (!Array.isArray(data) ? [data] : data))
}

function executor ({ event, chunk, config, account }) {
  return findCredits({ account })
        .then((credits) => createTransactions(credits, account))
        .then(({ total }) => createWallet(total, account))
}

module.exports.main = chunky.handler({ executor, filename, auth })
