const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const ClaimTokens = 100

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
          .then((wallet) => ((!wallet || wallet.length === 0) ? resolve() : resolve(wallet)))
          .catch(() => resolve())
  })
}

const updateWallet = ({ claim, account }) => {
  const userId = account.user.uid
  const data = { claimed: claim.carmel }

  return getWallet(userId)
      .then((wallet) => {
        if (!wallet) {
          return createWallet(userId, data)
        }

        if (wallet.claimed) {
          return Promise.resolve()
        }

        return chunky.firebase.operation('update', {
          key: `wallets/${wallet._id}`,
          claimed: data.claimed
        })
        .then(() => chunky.firebase.operation('update', { key: `users-wallets/${userId}`, timestamp: Date.now() }))
      })
}

const createClaim = ({ account, config, data }) => {
  var claim = Object.assign({}, {
    node: 'claims',
    tokens: ClaimTokens,
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
