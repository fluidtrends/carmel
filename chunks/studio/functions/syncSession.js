const chunky = require('react-cloud-chunky')
const moment = require('moment')
const Stages = require('./stages')

const filename = __filename
const auth = { limit: 1 }

const findSession = (machineId) => {
  return new Promise((resolve, reject) => {
    chunky.firebase.operation('retrieve', { key: `sessions/${machineId}`})
          .then((session) => !session || Array.isArray(session) && session.length === 0 ? resolve() : resolve(session))
          .catch(() => resolve())
  })
}

const getWallet = (userId) => {
  return new Promise((resolve, reject) => {
    chunky.firebase.operation('retrieve', { key: `users-wallets/${userId}` })
          .then((wallet) => chunky.firebase.operation('retrieve', { key: `wallets/${wallet._id}` }))
          .then((wallet) => ((!wallet || (Array.isArray(wallet) && wallet.length === 0)) ? resolve() : resolve(wallet)))
          .catch(() => resolve())
  })
}

const updateUserWallet = (controller, userId) => {
  if (!controller || !controller.achievement || !controller.achievement.tokens) {
    return Promise.resolve()
  }

  const amount = controller.achievement.tokens

  return getWallet(userId)
        .then(wallet =>
          chunky.firebase.operation('update', { key: `wallets/${wallet._id}`, carmel: (parseFloat(wallet.carmel) + parseFloat(amount)) })
         .then(() => chunky.firebase.operation('update', { key: `users-wallets/${userId}/${wallet._id}`, timestamp: `${Date.now()}` })))
}

const updateSession = (data, account, previousSession) => {
  const userId = (account ? account.user.uid : (previousSession ? previousSession.userId : undefined))
  const timestamp = `${Date.now()}`
  const hasStageAchivement = (Stages.Achievements[data.stage] ? true : false)
  const hasPreviousStageAchivement = (previousSession && previousSession.achievements && previousSession.achievements[data.stage]) ? true : false

  if (previousSession && previousSession.fingerprint !== data.machineFingerprint) {
    return Promise.reject(new Error('Invalid machine fingerprint'))
  }

  var session = Object.assign({},
    {
      node: 'sessions',
      id: data.machineId,
      fingerprint: data.machineFingerprint,
      stage: data.stage,
      unclaimedTokens: 0,
      challenges: {},
      achievements: {}
    },
  previousSession,
    { timestamp,
      stage: data.stage || ''
    },
  data.challengeId && { challengeId: data.challengeId },
  account && {
    userId: account.user.uid,
    userEmail: account.user.email,
    join: {
      users: {
        id: account.user.uid
      }
    }
  })

  if (!session.achievements[data.stage] && hasStageAchivement) {
    session.achievements[data.stage] = { timestamp }
  }

  switch (data.stage) {
    case Stages.CHALLENGE_STARTED:
      session.challenges[data.challengeId] = Object.assign({}, session.challenges[data.challengeId], { startTimestamp: timestamp, status: 'started', taskIndex: 1, updatedTimestamp: timestamp })
      break
    case Stages.CHALLENGE_STOPPED:
      session.challenges[data.challengeId] = Object.assign({}, session.challenges[data.challengeId], { status: 'stopped', taskIndex: 1, updatedTimestamp: timestamp, stopTimestamp: timestamp })
      break
    case Stages.CHALLENGE_RATED:
      delete session.challengeId
      session.challenges[data.challengeId] = Object.assign({}, session.challenges[data.challengeId], { status: 'stopped', taskIndex: 1, updatedTimestamp: timestamp, stopTimestamp: timestamp })
      break
    case Stages.CHALLENGE_CANCELLED:
      delete session.challengeId
      break
    case Stages.TASK_COMPLETED:
      session.challenges[data.challengeId] = Object.assign({}, session.challenges[data.challengeId], { taskIndex: parseInt(session.challenges[data.challengeId].taskIndex + 1), updatedTimestamp: timestamp })
      break
    case Stages.CHALLENGE_COMPLETED:
      session.challenges[data.challengeId] = Object.assign({}, session.challenges[data.challengeId], { completedTimestamp: timestamp, status: 'completed', taskIndex: parseInt(session.challenges[data.challengeId].taskIndex + 1), updatedTimestamp: timestamp })
      break
    default:
  }

  var controller = (!hasPreviousStageAchivement && hasStageAchivement ? { type: 'achievement', achievement: Object.assign({}, Stages.Achievements[data.stage]) } : undefined)

  return updateUserWallet(controller, userId)
         .then(() => chunky.firebase.operation(account ? 'add' : 'create', session)
                .then((result) => Object.assign({}, result, controller && { controller })))
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
