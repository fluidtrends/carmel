const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const getWallet = (userId) => {
  return new Promise((resolve, reject) => {
    chunky.firebase.operation('retrieve', { key: `users-wallets/${userId}` })
          .then((wallet) => chunky.firebase.operation('retrieve', { key: `wallets/${wallet._id}` }))
          .then((wallet) => ((!wallet || (Array.isArray(wallet) && wallet.length === 0)) ? resolve() : resolve(wallet)))
          .catch(() => resolve())
  })
}

const updateWalletPoints = (userId, amount) => {
  return getWallet(userId).then((wallet) => {
    return chunky.firebase.operation('update', { key: `wallets/${wallet._id}`, carmel: (parseFloat(wallet.xp) + parseFloat(amount)) })
                 .then(() => chunky.firebase.operation('update', { key: `users-wallets/${userId}/${wallet._id}`, timestamp: `${Date.now()}` }))
  })
}

const createAchievement = ({ userId, xp, challengeId, skills, stats }) => {
  return chunky.firebase.operation('add', {
    node: 'achievements',
    challengeId,
    xp,
    userId,
    skills,
    stats,
    join: {
      users: {
        id: userId
      }
    }
  })
}

function executor ({ event, chunk, config, account }) {
  const challengeId = event.body.challengeId
  const stats = event.body.stats
  const skills = event.body.skills
  const xp = event.body.xp
  const userId = account.user.uid

  return createAchievement({ userId, xp, skills, stats, challengeId })
         .then(() => updateWalletPoints(userId, xp))
}

module.exports.main = chunky.handler({ executor, filename, auth })
