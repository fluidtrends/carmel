module.exports = ({ args, journey, timestamp }) => {
  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  if (!journey.challenge) {
    throw new Error("A challenge is not yet in progress")
  }

  update.challenge = false
  update.pausedChallenges = update.pausedChallenges || {}
  update.pausedChallenges[journey.challenge.challengeId] = Object.assign({}, journey.challenge, { timestamp })

  return { update, response }
}
