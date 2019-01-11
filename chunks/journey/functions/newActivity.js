const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const createActivity = (account, data) => {
  const op = Object.assign({}, {
    node: 'activities'
  }, data, {
    userId: account.user.uid,
    join: {
      users: {
        id: account.user.uid
      }
    }
  })

  return chunky.firebase.operation('add', op)
}

function executor ({ event, chunk, config, account }) {
  return createActivity(account, event.body)
}

module.exports.main = chunky.handler({ executor, filename, auth })
