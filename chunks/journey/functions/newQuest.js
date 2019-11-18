const chunky = require('react-cloud-chunky')
const slugify = require('slugify')

const filename = __filename
const auth = { limit: 1, private: true }

const findQuest = (id) => {
  return new Promise((resolve, reject) => {
      return chunky.firebase.operation('retrieve', { key: `quests/${id}` })
         .then((quest) => ((!quest || (Array.isArray(quest) && quest.length === 0)) ? resolve() : resolve(quest)))
  })
}

const update = (account, data) => {
  const updates = Object.assign({}, data)
  const id = updates.id

  return chunky.firebase.operation('update', Object.assign({}, { key: `quests/${id}` }, updates))
               .then(() => chunky.firebase.operation('update', Object.assign({}, { key: `users-quests/${account.user.uid}/${id}`, timestamp: `${Date.now()}` })))
}

const create = (account, data, suffix) => {
    if (!data.name) {
      return Promise.reject(new Error("Please provide a name"))
    }

    const id = `${slugify(data.name).toLowerCase()}${suffix || ''}`

    const op = Object.assign({}, {
      node: 'quests',
      id
    }, data, {
      userId: account.user.uid,
      join: {
        users: {
          id: account.user.uid
        }
      }
    })

    return findQuest(id)
          .then((quest) => quest ? create(account, data, '-') : chunky.firebase.operation('add', op))
}

function executor ({ event, chunk, config, account }) {
  const args = Object.assign({}, event.body)
  if (args.id) {
    return update(account, args)
  }

  return create(account, args)
}

module.exports.main = chunky.handler({ executor, filename, auth })
