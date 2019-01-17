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
  return create(account, event.body)
}

module.exports.main = chunky.handler({ executor, filename, auth })
