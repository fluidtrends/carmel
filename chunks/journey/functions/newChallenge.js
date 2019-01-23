const chunky = require('react-cloud-chunky')
const slugify = require('slugify')

const filename = __filename
const auth = { limit: 1, private: true }

const findChallenge = (id) => {
  return new Promise((resolve, reject) => {
      return chunky.firebase.operation('retrieve', { key: `challenges/${id}` })
         .then((challenge) => ((!challenge || (Array.isArray(challenge) && challenge.length === 0)) ? resolve() : resolve(challenge)))
  })
}

const update = (account, data) => {
  const updates = Object.assign({}, data)
  const id = updates.id

  return chunky.firebase.operation('update', Object.assign({}, { key: `challenges/${id}` }, updates))
               .then(() => chunky.firebase.operation('update', Object.assign({}, { key: `users-challenges/${account.user.uid}/${id}`, timestamp: `${Date.now()}` })))
}

const create = (account, data, suffix) => {
    if (!data.name) {
      return Promise.reject(new Error("Please provide a name"))
    }

    const id = `${slugify(data.name).toLowerCase()}${suffix || ''}`

    const op = Object.assign({}, {
      node: 'challenges',
      id
    }, data, {
      userId: account.user.uid,
      join: {
        users: {
          id: account.user.uid
        }
      }
    })

    return findChallenge(id)
          .then((challenge) => challenge ? create(account, data, '-') : chunky.firebase.operation('add', op))
}

function executor ({ event, chunk, config, account }) {
  const args = Object.assign({}, event.body)
  if (args.id) {
    return update(account, args)
  }

  return create(account, args)
}

module.exports.main = chunky.handler({ executor, filename, auth })
