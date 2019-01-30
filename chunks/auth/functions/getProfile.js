const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1 }

const findUsername = (username) => {
  return new Promise((resolve, reject) => chunky.firebase.operation('retrieve', { key: `usernames/${username}` })
             .then((user) => ((!user || (Array.isArray(user) && user.length === 0)) ? resolve() : resolve(user)))
             .catch((error) => resolve()))
}

const getUser = (userId) => {
  return new Promise((resolve, reject) => chunky.firebase.operation('retrieve', { key: `users/${userId}` })
             .then((user) => ((!user || (Array.isArray(user) && user.length === 0)) ? resolve() : resolve(user)))
             .catch((error) => resolve()))
}

function executor ({ event, chunk, config, account }) {
  if (!event.body.username && !event.body.userId) {
    return Promise.reject(new Error("Please specify a username or a userId"))
  }

  if (event.body.userId) {
    return getUser(event.body.userId)
  }

  return new Promise((resolve, reject) => {
    findUsername(event.body.username)
        .then((username) => username ?
          getUser(username.userId)
          .then((user) => resolve(user))
          .catch((err) => reject(err))
        : reject(new Error("Username does not exist")))
  })
}

module.exports.main = chunky.handler({ executor, filename, auth })
