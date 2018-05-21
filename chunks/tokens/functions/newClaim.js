const chunky = require('react-cloud-chunky')
const period = require('./period')

const filename = __filename
const auth = { limit: 1, private: true }

const findClaim = (address) => {
  return chunky.firebase.operation('retrieve', { key: `claims/${address}` })
}

const createClaim = ({ account, currentPeriod, config, data }) => {
  var claim = Object.assign({}, {
    node: 'claims'
  }, data, currentPeriod, {
    userId: account.user.uid,
    email: account.user.email,
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

      const currentPeriod = period.current()

      claims.forEach(claim => {
        if (claim.periodId === currentPeriod.periodId) {
          claimed = true
        }
      })

      if (claimed) {
        reject(new Error('You already claimed your free tokens.'))
        return
      }

      resolve(currentPeriod)
    })
    .catch((e) => reject(e))
  })
}

function executor ({ event, chunk, config, account }) {
  return verifyClaim({ data: event.body, config })
         .then((currentPeriod) => createClaim({ account, currentPeriod, config, data: event.body }))
}

module.exports.main = chunky.handler({ executor, filename, auth })
