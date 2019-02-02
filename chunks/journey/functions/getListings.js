const chunky = require('react-cloud-chunky')
const fetch = require('node-fetch')

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

function getChallenge(id, includeContent) {
  return chunky.firebase.operation('retrieve', { key: `challenges/${id}` })
               .then((c) => {
                    if (!includeContent) {
                      return c
                    }

                    if (c.status === 'published' && c.repo && c.hash) {
                     const sourceUrl = `https://raw.githubusercontent.com/${c.repo}/${c.hash}/${c.path ? c.path : '/'}`
                     return fetch(`${sourceUrl}/index.json`, {
                       method: 'get',
                       headers: { 'Content-Type': 'application/json' }
                     })
                     .then(response => response.json())
                     .then((content) => Object.assign({}, c, content))
                    }

                    return c
                 })
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
    return getChallenge(event.body.challengeId, true).then((challenge) => ({ challenge }))
  }

  const userId = event.body.userId || (account ? account.user.uid :false)

  if (event.body.all || !userId) {
    return getAllChallenges().then((challenges) => ({ challenges }))
  }

  return getUserChallengeIds(userId)
         .then((all) => Array.isArray(all) ? all : [all])
         .then((ids) => Promise.all(ids.map(id => getChallenge(id._id))))
         .then((challenges) => getUserJourney(userId).then((journey) => ({ challenges, journey })))
}

module.exports.main = chunky.handler({ executor, filename, auth })
