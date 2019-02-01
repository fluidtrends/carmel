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

const getUserByUsername = (u) => {
  return new Promise((resolve, reject) => {
    findUsername(u)
        .then((username) => username ?
          getUser(username.userId)
          .then((user) => resolve(user))
          .catch((err) => reject(err))
        : reject(new Error("Username does not exist")))
  })
}

function executor ({ event, chunk, config, account }) {
  if (!event.body.username && !event.body.userId && !event.body.usernames) {
    return Promise.reject(new Error("Please specify one or more usernames or a userId"))
  }

  if (event.body.userId) {
    return getUser(event.body.userId)
  }

  if (event.body.username) {
    return getUserByUsername(event.body.username)
  }

  return Promise.all(event.body.usernames.map(u => getUserByUsername(u)))
}

module.exports.main = chunky.handler({ executor, filename, auth })
