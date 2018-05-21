const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const createProfile = (account) => {
  const profile = Object.assign({}, {
    node: 'profiles'
  }, {
    userId: account.user.uid,
    email: account.user.email,
    join: {
      users: {
        id: account.user.uid
      }
    }
  })

  return chunky.firebase.operation('add', profile)
}

const getProfile = (account) => {
  return new Promise((resolve, reject) => {
    chunky.firebase.operation('retrieve', { key: `users-profiles/${account.user.uid}` })
          .then((profile) => chunky.firebase.operation('retrieve', { key: `profiles/${profile._id}` }))
          .then((profile) => ((!profile || (Array.isArray(profile) && profile.length === 0)) ? resolve() : resolve(profile)))
          .catch(() => resolve())
  })
}

const updateProfile = (data, account) => {
  return getProfile(account).then((profile) => {
    const start = (profile ? Promise.resolve() : createProfile(account))

    return start.then(() => chunky.firebase.operation('update', Object.assign({}, { key: `profiles/${profile._id}` }, data)))
                .then(() => chunky.firebase.operation('update', { key: `users-profiles/${account.user.id}/${profile._id}`, timestamp: `${Date.now()}` }))
  })
}

function executor ({ event, chunk, config, account }) {
  return updateProfile(event.body, account)
}

module.exports.main = chunky.handler({ executor, filename, auth })
