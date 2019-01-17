const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const journeyContent = (account, updates) => {
  return Object.assign({}, oldContent, updates)
}

const createJourney = (account, data) => {
  const profile = Object.assign({}, {
    node: 'journeys'
  }, data, {
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

const getJourney = (userId) => {
  return new Promise((resolve, reject) => chunky.firebase.operation('retrieve', { key: `users-journeys/${userId}` })
             .then((journey) => chunky.firebase.operation('retrieve', { key: `journeys/${journey._id}` }))
             .then((journey) => ((!journey || (Array.isArray(journey) && journey.length === 0)) ? resolve() : resolve(journey)))
             .catch((error) => resolve()))
}

function executor ({ event, chunk, config, account }) {
  return getJourney(account.user.uid)
         .then((journey) => journey ? createJourney(account, journeyContent(account, event.body)) :
               chunky.firebase.operation('update', Object.assign({}, { key: `journeys/${journey._id}` }, journeyContent(account, event.body, journey)))
               .then(() => chunky.firebase.operation('update', { key: `users-journeys/${userId}/${journey._id}`, timestamp: `${Date.now()}` })))
}

module.exports.main = chunky.handler({ executor, filename, auth })
