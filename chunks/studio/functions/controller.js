const chunky = require('react-cloud-chunky')
const moment = require('moment')
const Stages = require('./stages')

const checkNewAchievement = ({ data, session, previousSession }) => {
  if (previousSession &&
      previousSession.achievements &&
      previousSession.achievements[data.stage] &&
      session.achievements &&
      session.achievements[data.stage]) {
    return
  }

  const type = 'newAchievement'
  const achievement = Stages.Achievements[data.stage]
  const message = `You just got ${achievement.tokens} CARMEL.`

  return {
    controller: {
      type, message, achievement
    }
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
                { achievements: {} },
                previousSession,
                data.challengeId && { challengeId: data.challengeId },
                data.taskId && { taskId: data.taskId },
                data.stage && { stage: data.stage })

    const timestamp = `${Date.now()}`
    const achievement = Object.assign({}, Stages.Achievements[data.stage], { timestamp })
    const hasAchievement = (typeof result.achievements[data.stage] !== 'undefined')

    result.achievements[data.stage] = result.achievements[data.stage] || achievement
    result.unclaimedTokens = result.unclaimedTokens + parseFloat(achievement.tokens || 0)

    if (!userId) {
      resolve(result)
      return
    }

    updateUserWallet(userId, result.unclaimedTokens).then(() => {
      result.unclaimedTokens = 0
      resolve(result)
    })
  })
}

const done = ({ data, userId, session, previousSession }) => {
  return new Promise((resolve, reject) => {
    const newAchievement = checkNewAchievement({ data, session, previousSession })
    resolve(Object.assign({}, session, newAchievement))
  })
}

module.exports = {
  start,
  done
}
