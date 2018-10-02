const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const getWallet = (userId) => {
  return new Promise((resolve, reject) => {
    chunky.firebase.operation('retrieve', { key: `users-wallets/${userId}` })
          .then((wallet) => chunky.firebase.operation('retrieve', { key: `wallets/${wallet._id}` }))
          .then((wallet) => ((!wallet || (Array.isArray(wallet) && wallet.length === 0)) ? resolve() : resolve(wallet)))
          .catch(() => resolve())
  })
}

const updateWalletTokens = (userId, amount, check) => {
  return getWallet(userId).then((wallet) => {
    if (check && ((parseFloat(wallet.carmel) + parseFloat(amount)) < 0)) {
      return Promise.reject(new Error(`You do not have enough CARMEL`))
    }

    return chunky.firebase.operation('update', { key: `wallets/${wallet._id}`, carmel: (parseFloat(wallet.carmel) + parseFloat(amount)) })
                 .then(() => chunky.firebase.operation('update', { key: `users-wallets/${userId}/${wallet._id}`, timestamp: `${Date.now()}` }))
  })
}

const createTransfer = (from, to, amount, type) => {
  return chunky.firebase.operation('add', {
    node: type,
    amount,
    userId: from,
    join: {
      users: {
        id: to
      }
    }
  })
}

function executor ({ event, chunk, config, account }) {
  const amount = event.body.amount
  const userId = account.user.uid
  const to = event.body.to

  return updateWalletTokens(userId, -amount, true)
                .then(() => updateWalletTokens(to, amount))
                .then(() => createTransfer(userId, to, amount, 'transferSent'))
                .then(() => createTransfer(to, userId, amount, 'transferReceived'))
}

module.exports.main = chunky.handler({ executor, filename, auth })
