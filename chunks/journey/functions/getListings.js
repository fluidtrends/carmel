const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

function getChallenge(id) {
  return chunky.firebase.operation('retrieve', { key: `challenges/${id}` })
}

function getAllChallenges() {
  return chunky.firebase.operation('retrieve', { key: `challenges` })
}

function getUserChallengeIds(account) {
  return chunky.firebase.operation('retrieve', { key: `users-challenges/${account.user.uid}` })
}

function getChallenge(id) {
  return chunky.firebase.operation('retrieve', { key: `challenges/${id}` })
}

function getUserJourney(account) {
  return chunky.firebase.operation('retrieve', { key: `users-journeys/${account.user.uid}` })
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

  if (event.body.all) {
    return getAllChallenges().then((challenges) => ({ challenges }))
  }

  return getUserChallengeIds(account)
         .then((all) => Array.isArray(all) ? all : [all])
         .then((ids) => Promise.all(ids.map(id => getChallenge(id._id))))
         .then((challenges) => getUserJourney(account).then((journey) => ({ challenges, journey })))
}

module.exports.main = chunky.handler({ executor, filename, auth })
