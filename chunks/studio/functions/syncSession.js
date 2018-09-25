const chunky = require('react-cloud-chunky')
const controller = require('./controller')

const filename = __filename
const auth = { limit: 1 }

const updateSession = (data, account, previousSession) => {
  const userId = (account ? account.user.uid : (previousSession ? previousSession.userId : undefined))

  if (previousSession && previousSession.fingerprint !== data.machineFingerprint) {
    return Promise.reject(new Error('Invalid machine fingerprint'))
  }

  return controller.start({ data, userId, previousSession })
          .then((result) => chunky.firebase.operation(account ? 'add' : 'create', Object.assign({},
            {
              node: 'sessions',
              id: data.machineId,
              fingerprint: data.machineFingerprint,
              stage: data.stage
            },
            result,
            account && {
              userId: account.user.uid,
              userEmail: account.user.email,
              join: {
                users: {
                  id: account.user.uid
                }
              }
            })))
            .then((session) => controller.done({ data, userId, session, previousSession }))
}

const findSession = (machineId) => {
  return new Promise((resolve, reject) => {
    chunky.firebase.operation('retrieve', { key: `sessions/${machineId}`})
          .then((session) => !session || Array.isArray(session) && session.length === 0 ? resolve() : resolve(session))
          .catch(() => resolve())
  })
}

function executor ({ event, chunk, config, account }) {
  const data = event.body

  if (!data.machineId) {
    return Promise.reject(new Error('Missing expected machine id'))
  }

  return findSession(data.machineId)
          .then((session) => updateSession(data, account, session))
}

module.exports.main = chunky.handler({ executor, filename, auth })
