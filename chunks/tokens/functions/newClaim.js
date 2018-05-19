const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const getWallet = (userId) => {
  return chunky.firebase.operation('retrieve', { key: `users-wallets/${userId}` })
          .then((index) => {
            delete index._id && delete index.timestamp && delete index.timestamp1
            const walletId = Object.keys(index)[0]
            return chunky.firebase.operation('retrieve', { key: `wallets/${walletId}` })
          })
}

const updateWallet = ({ claim, account }) => {
  return getWallet(account.user.uid)
      .then((wallet) => wallet && chunky.firebase.operation('update', {
        key: `wallets/${wallet._id}`,
        claimed: (wallet.claimed + claim.tokens)
      })
      .then(() => chunky.firebase.operation('update', { key: `users-wallets/${account.user.uid}/${wallet._id}`, timestamp: Date.now() })))
}

const tokens = () => {
  return 100
}

const createClaim = ({ account, config, data }) => {
  var claim = Object.assign({}, {
    node: 'claims',
    tokens: tokens(),
    status: 'unverified'
  }, data, {
    userId: account.user.uid,
    join: {
      users: {
        id: account.user.uid
      }
    }
  })

  return chunky.firebase.operation('add', claim)
}

function executor ({ event, chunk, config, account }) {
  return createClaim({ account, config, data: event.body })
         .then((claim) => updateWallet({ claim, account }))
}

module.exports.main = chunky.handler({ executor, filename, auth })
