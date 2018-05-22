const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const getProfile = (userId) => {
  return new Promise((resolve, reject) => {
    return chunky.firebase.operation('retrieve', { key: `users-profiles/${userId}` })
          .then((profile) => chunky.firebase.operation('retrieve', { key: `profiles/${profile._id}` }))
          .then((profile) => ((!profile || (Array.isArray(profile) && profile.length === 0)) ? resolve() : resolve(profile)))
          .catch(() => resolve())
  })
}

const updateProfile = (data, userId) => {
  return getProfile(userId).then((profile) => {
    return chunky.firebase.operation('update', Object.assign({}, { key: `profiles/${profile._id}` }, data))
           .then(() => chunky.firebase.operation('update', { key: `users-profiles/${userId}/${profile._id}`, timestamp: `${Date.now()}` }))
  })
}

function executor ({ event, chunk, config, account }) {
  return updateProfile({ telegramUsername: event.data.username }, account.user.uid)
}

module.exports.main = chunky.handler({ executor, filename, auth })
