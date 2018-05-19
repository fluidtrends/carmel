const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const _claim = () => {
  return ({ tokens: 100, period: 'AirDrop' })
}

const getWallet = (userId) => {
  return chunky.firebase.operation('retrieve', { key: `users-wallets/${userId}` })
          .then((index) => {
            delete index._id && delete index.timestamp && delete index.timestamp1
            const walletId = Object.keys(index)[0]
            return chunky.firebase.operation('retrieve', { key: `wallets/${walletId}` })
          })
}

const findClaim = (address) => {
  return chunky.firebase.operation('retrieve', { key: `claims/${address}` })
}

const updateWallet = ({ claim, account }) => {
  return getWallet(account.user.uid)
      .then((wallet) => wallet && chunky.firebase.operation('update', {
        key: `wallets/${wallet._id}`,
        claimed: (wallet.claimed + claim.tokens)
      })
      .then(() => chunky.firebase.operation('update', { key: `users-wallets/${account.user.uid}/${wallet._id}`, timestamp: Date.now() })))
}

const createClaim = ({ account, config, data }) => {
  var claim = Object.assign({}, {
    node: 'claims',
    id: data.ethAddress,
    status: 'unverified'
  }, data, _claim(), {
    userId: account.user.uid,
    join: {
      users: {
        id: account.user.uid
      }
    }
  })

  return chunky.firebase.operation('add', claim)
        .then((claim) => updateWallet({ claim, account }))
}

const verifyClaim = ({ data, config }) => {
  return new Promise((resolve, reject) => {
    findClaim(data.ethAddress).then((all) => {
      var claims = (Array.isArray(all) ? all : [all])
      var claimed = false
      claims.forEach(claim => {
        if (claim.period === _claim().period) {
          claimed = true
        }
      })

      if (claimed) {
        reject(new Error('You already claimed your free tokens.'))
        return
      }

      resolve()
    })
    .catch((e) => reject(e))
  })
}

function executor ({ event, chunk, config, account }) {
  return verifyClaim({ data: event.body, config })
         .then(() => createClaim({ account, config, data: event.body }))
}

module.exports.main = chunky.handler({ executor, filename, auth })
