const chunky = require('react-cloud-chunky')
const merge = require('deepmerge')

const filename = __filename
const auth = { limit: 1, private: true }

const eventData = (args, oldJourney) => {
  if (!oldJourney) {
    return Object.assign({}, args)
  }

  return Object.assign({}, args)
}

const createJourney = ({ account, type, machineId, platform, args }) => {
  var journey = {
    node: `journeys`,
    userId: account.user.uid,
    email: account.user.email,
    join: {
      users: {
        id: account.user.uid
      }
    }
  }

  const timestamp = `${Date.now()}`

  journey[machineId] = {
    [type]: Object.assign({}, eventData(args), { timestamp }),
    platform,
    timestamp
  }

  return chunky.firebase.operation('add', journey)
}

const getJourney = (userId) => {
  return new Promise((resolve, reject) => {
    chunky.firebase.operation('retrieve', { key: `users-journeys/${userId}` })
          .then((journey) => ((!journey || (Array.isArray(journey) && journey.length === 0)) ? resolve() : resolve(journey)))
          .catch((error) => resolve())
  })
}

function executor ({ event, chunk, config, account }) {
  if (!event.body.machineId) {
    return Promise.reject(new Error("The machine id missing"))
  }

  if (!event.body.type) {
    return Promise.reject(new Error("The event type id missing"))
  }

  if (!event.body.platform) {
    return Promise.reject(new Error("The platform missing"))
  }

  const args = Object.assign({}, event.body)
  const machineId = args.machineId
  const type = args.type
  const platform = args.platform

  delete args.machineId
  delete args.type
  delete args.platform

  const timestamp = `${Date.now()}`

  return getJourney(account.user.uid).then((journey) => {
    if (!journey) {
      return createJourney({ account, type, platform, machineId, args })
             .then((j) => chunky.firebase.operation('update', { key: `users-journeys/${account.user.uid}/${j._id}`, timestamp }))
    }

    const updates = {
      [type]: Object.assign({}, eventData(args, journey), { timestamp })
    }

    return chunky.firebase.operation('update', Object.assign({}, { key: `journeys/${journey._id}/${machineId}`, timestamp }, updates))
           .then((j) => chunky.firebase.operation('update', { key: `users-journeys/${account.user.uid}/${journey._id}`, timestamp }))
 })
}

module.exports.main = chunky.handler({ executor, filename, auth })
