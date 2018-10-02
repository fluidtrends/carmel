const chunky = require('react-cloud-chunky')
const moment = require('moment')
const Stages = require('./stages')

const generateController = ({ data, session, previousSession }) => {
  if (previousSession &&
      previousSession.achievements &&
      previousSession.achievements[data.stage] &&
      session.achievements &&
      session.achievements[data.stage]) {
    return false
  }

  const achievement = Stages.Achievements[data.stage]
  const type = 'achievement'

  return {
    type, achievement
  }
}

const getWallet = (userId) => {
  return new Promise((resolve, reject) => {
    chunky.firebase.operation('retrieve', { key: `users-wallets/${userId}` })
          .then((wallet) => chunky.firebase.operation('retrieve', { key: `wallets/${wallet._id}` }))
          .then((wallet) => ((!wallet || (Array.isArray(wallet) && wallet.length === 0)) ? resolve() : resolve(wallet)))
          .catch(() => resolve())
  })
}

const updateUserWallet = (userId, amount) => {
  return getWallet(userId)
        .then(wallet =>
          chunky.firebase.operation('update', { key: `wallets/${wallet._id}`, carmel: (parseFloat(wallet.carmel) + parseFloat(amount)) })
         .then(() => chunky.firebase.operation('update', { key: `users-wallets/${userId}/${wallet._id}`, timestamp: `${Date.now()}` })))
}

const start = ({ data, userId, previousSession }) => {
  return new Promise((resolve, reject) => {
    var result = Object.assign({},
                { unclaimedTokens: 0 },
                { challenges: {} },
                { achievements: {} },
                previousSession,
                data.challengeId && { challengeId: data.challengeId },
                data.taskId && { taskId: data.taskId },
                data.stage && { stage: data.stage })

    const timestamp = `${Date.now()}`
    const achievement = Object.assign({}, Stages.Achievements[data.stage], { timestamp })
    const hasAchievement = (typeof result.achievements[data.stage] !== 'undefined')

    if (hasAchievement) {
      resolve(result)
      return
    }

    result.achievements[data.stage] = achievement

    if (!achievement.tokens) {
      resolve(result)
      return
    }

    if (!userId) {
      result.unclaimedTokens = result.unclaimedTokens + parseFloat(achievement.tokens)
      resolve(result)
      return
    }

    result.unclaimedTokens = 0

    updateUserWallet(userId, achievement.tokens).then(() => {
      resolve(result)
    })
  })
}

const done = ({ data, userId, session, previousSession }) => {
  return new Promise((resolve, reject) => {
    const controller = generateController({ data, session, previousSession })
    resolve(Object.assign({}, session, { controller }))
  })
}

module.exports = {
  start,
  done
}
