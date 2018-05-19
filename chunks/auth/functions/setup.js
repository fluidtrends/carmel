const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const createWallet = (total, account) => {
  const wallet = Object.assign({}, {
    node: 'wallets',
    carmel: total,
    claimed: 0,
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

const findPurchases = (account, credits) => {
  return chunky.firebase.operation('retrieve', Object.assign({}, {
    key: 'purchases',
    orderBy: 'email',
    equalTo: account.user.email
  }))
  .then((data) => (!Array.isArray(data) ? [data] : data))
  .then((purchases) => ({ purchases, credits }))
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

const createTransactions = (credits, purchases, account) => {
  var total = 0

  const allPurchases = purchases.map(p => {
    return chunky.firebase.operation('create', { node: `users-purchases/${account.user.uid}`, id: p._id, timestamp: `${Date.now()}` })
           .then(() => chunky.firebase.operation('update', { key: `purchases/${p._id}`, userIsMember: true, userId: account.user.uid }))
  })

  const allCredits = credits.map(t => {
    total = total + t.tokens
    const id = t._id
    delete t._id
    return chunky.firebase.operation('remove', { key: `credits/${id}` })
          .then(() => createTransaction(t, account))
  })
  return Promise.all(allPurchases).then(() => Promise.all(allCredits).then((data) => ({ data, total })))
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
        .then((credits) => findPurchases(account, credits))
        .then(({ credits, purchases }) => createTransactions(credits, purchases, account))
        .then(({ total }) => createWallet(total, account))
}

module.exports.main = chunky.handler({ executor, filename, auth })
