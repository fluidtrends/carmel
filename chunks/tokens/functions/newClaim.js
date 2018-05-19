const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const _claim = () => {
  return ({ tokens: 100, period: 'AirDrop' })
}

const getWallet = (userId) => {
  return chunky.firebase.operation('retrieve', { key: `users-wallets/${userId}` })
          .then((index) => {
            delete index._id && delete index.timestamp
            const walletId = Object.keys(index)[0]
            return chunky.firebase.operation('retrieve', { key: `wallets/${walletId}` })
          })
}

const findClaim = (address) => {
  return chunky.firebase.operation('retrieve', { key: `claims/${address}` })
}

const createClaim = ({ account, config, data }) => {
  var claim = Object.assign({}, {
    node: 'claims',
    id: data.ethAddress
  }, data, _claim(), {
    userId: account.user.uid,
    join: {
      users: {
        id: account.user.uid
      }
    }
  })

  return chunky.firebase.operation('add', claim)
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
