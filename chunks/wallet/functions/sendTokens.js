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

const findUser = (email) => {
  return chunky.firebase.operation('retrieve', Object.assign({}, {
    key: 'users',
    orderBy: 'email',
    equalTo: email
  }))
}

const updateWalletTokens = (userId, amount, check) => {
  return getWallet(userId).then((wallet) => {
    if (check && ((parseFloat(wallet.carmel) + parseFloat(amount)) < 0) {
      throw new Error('You do not have enough CARMEL')
      return
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

  return findUser(to)
          .then((user) => {
            updateWalletTokens(userId, -amount, true)
                .then(() => createTransfer(userId, user._id, amount, 'transferSent'))
                .then((user) => updateWalletTokens(user._id, amount))
                .then(() => createTransfer(user._id, userId, amount, 'transferReceived'))
          })

module.exports.main = chunky.handler({ executor, filename, auth })
