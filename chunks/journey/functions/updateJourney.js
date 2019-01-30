const chunky = require('react-cloud-chunky')
const merge = require('deepmerge')

const filename = __filename
const auth = { limit: 1, private: true }

const requireMachine = (journey, args) => {
  if (!journey || !journey.machines || !journey.machines[args.machineId]) {
    throw new Error("Sorry, this machine is not recognized yet")
  }
}

const requireChallenge = (journey, args) => {
  if (!journey.challenge) {
    throw new Error("A challenge is not yet in progress")
  }
}

const journeyUpdate = ({ type, args, journey, timestamp, config }) => {
  switch (type) {
    case 'next':
      requireChallenge(journey, args)
    case 'start':
    case 'pause':
    case 'init':
    case 'install':
      requireMachine(journey, args)
      break
    default:
  }

  return require(`./event.${type}`)({ args, journey, timestamp, config })
}

const createJourney = ({ account, type, args, timestamp, config }) => {
  const { update, response } = journeyUpdate({ type, config, args, timestamp })

  const journey = Object.assign({}, {
    node: `journeys`,
    userId: account.user.uid,
    email: account.user.email,
    join: {
      users: {
        id: account.user.uid
      }
    }
  }, update)

  return chunky.firebase.operation('add', journey).then(() => response)
}

const getJourney = (userId) => {
  return new Promise((resolve, reject) => {
        chunky.firebase.operation('retrieve', { key: `users-journeys/${userId}` })
          .then((journey) => ((!journey || (Array.isArray(journey) && journey.length === 0)) ? resolve() :
                              chunky.firebase.operation('retrieve', { key: `journeys/${journey._id}` }).then((j) => resolve(j))))
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

  delete args.type

  const timestamp = `${Date.now()}`

  return getJourney(account.user.uid)
         .then((journey) => {
            if (!journey) {
              return createJourney({ account, type, timestamp, args, config })
            }

            const { update, response } = journeyUpdate({ type, config, args, journey, timestamp })
            return chunky.firebase.operation('update', Object.assign({}, { key: `journeys/${journey._id}`, timestamp }, update))
                         .then(() => chunky.firebase.operation('update', { key: `users-journeys/${account.user.uid}/${journey._id}`, timestamp }))
                         .then(() => response)
        })
}

module.exports.main = chunky.handler({ executor, filename, auth })
