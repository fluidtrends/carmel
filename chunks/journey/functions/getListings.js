const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1 }

function getChallenge(id) {
  return chunky.firebase.operation('retrieve', { key: `challenges/${id}` })
}

function getAllChallenges() {
  return chunky.firebase.operation('retrieve', { key: `challenges` })
}

function getUserChallengeIds(userId) {
  return chunky.firebase.operation('retrieve', { key: `users-challenges/${userId}` })
}

function getChallenge(id) {
  return chunky.firebase.operation('retrieve', { key: `challenges/${id}` })
}

function getUserJourney(userId) {
  return chunky.firebase.operation('retrieve', { key: `users-journeys/${userId}` })
         .then((j) => {
           if (!j) {
             return false
           }

           return chunky.firebase.operation('retrieve', { key: `journeys/${j._id}` })
         })
}

function executor ({ event, chunk, config, account }) {
  if (event.body.challengeId) {
    return getChallenge(event.body.challengeId).then((challenge) => ({ challenge }))
  }

  const userId = event.body.userId || (account ? account.uset.uid)

  if (event.body.all || !userId) {
    return getAllChallenges().then((challenges) => ({ challenges }))
  }

  return getUserChallengeIds(userId)
         .then((all) => Array.isArray(all) ? all : [all])
         .then((ids) => Promise.all(ids.map(id => getChallenge(id._id))))
         .then((challenges) => getUserJourney(userId).then((journey) => ({ challenges, journey })))
}

module.exports.main = chunky.handler({ executor, filename, auth })
