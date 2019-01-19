const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    return chunky.firebase.operation('retrieve', { key: `users/${userId}` })
          .then((user) => ((!user || (Array.isArray(user) && user.length === 0)) ? resolve() : resolve(user)))
          .catch(() => resolve())
  })
}

const updateUser = (data, userId) => {
  return getUser(userId).then((user) => {
    return chunky.firebase.operation('update', Object.assign({}, { key: `user/${user._id}` }, data))
  })
}

function executor ({ event, chunk, config, account }) {
  return updateUser(event.body, account.user.uid)
}

module.exports.main = chunky.handler({ executor, filename, auth })
