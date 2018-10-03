const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const getUserItem = (userId, item) => {
  return new Promise((resolve, reject) => {
    chunky.firebase.operation('retrieve', { key: `users-${item}/${userId}` })
          .then((result) => chunky.firebase.operation('retrieve', { key: `${item}/${result._id}` }))
          .then((data) => ((!data || (Array.isArray(data) && data.length === 0)) ? resolve() : resolve(data)))
          .catch(() => resolve())
  })
}

const getWallet = (userId) => getUserItem(userId, 'wallets')
const getSession = (userId) => getUserItem(userId, 'sessions')

const updateWalletTokens = (userId, amount, check) => {
  return getWallet(userId).then((wallet) => {
    if (check && ((parseFloat(wallet.carmel) + parseFloat(amount)) < 0)) {
      return Promise.reject(new Error(`You do not have enough CARMEL`))
    }

    return chunky.firebase.operation('update', { key: `wallets/${wallet._id}`, carmel: (parseFloat(wallet.carmel) + parseFloat(amount)) })
                 .then(() => chunky.firebase.operation('update', { key: `users-wallets/${userId}/${wallet._id}`, timestamp: `${Date.now()}` }))
  })
}

const createPostTransfer = (from, to, amount, result, type, data) => {
  if (type === 'challengePurchase') {
    const now = Date.now()

    const update = (session) => {
      return {
        key: `sessions/${session._id}`,
        challengeId: data.challengeId,
        challenges: Object.assign({}, session.challenges, {
          [data.challengeId]: {
            status: 'purchased',
            purchaseTimestamp: `${now}`,
            updatedTimestamp: `${now}`
          }
        })
      }
    }

    return getSession(from).then((session) => {
      return chunky.firebase.operation('update', update(session))
                   .then(() => chunky.firebase.operation('update', { key: `users-sessions/${from}/${session._id}`, timestamp: `${now}` }))
    })
  }

  return result
}

const createTransfer = (from, to, amount, type, data) => {
  return chunky.firebase.operation('add', {
    node: 'transfers',
    amount,
    type,
    data,
    from,
    to,
    join: {
      users: {
        id: from
      }
    }
  })
  .then((result) => chunky.firebase.operation('join', {
    node: result,
    nodeName: 'transfers',
    join: {
      users: {
        id: to
      }
    }
  }).then(() => result))
}

function executor ({ event, chunk, config, account }) {
  const amount = event.body.amount
  const userId = account.user.uid
  const to = event.body.to
  const type = event.body.type || 'transfer'
  const data = event.body.data || ''

  return updateWalletTokens(userId, -amount, true)
                .then(() => updateWalletTokens(to, amount))
                .then(() => createTransfer(userId, to, amount, type, data))
                .then((result) => createPostTransfer(userId, to, amount, result, type, data))
}

module.exports.main = chunky.handler({ executor, filename, auth })
