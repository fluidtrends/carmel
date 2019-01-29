module.exports = ({ args, journey, timestamp }) => {
  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  if (journey.challenge) {
    throw new Error("A challenge is already in progress")
  }

  if (journey.pausedChallenges && journey.pausedChallenges[args.challengeId]) {
    update.challenge = Object.assign({}, journey.pausedChallenges[args.challengeId], { timestamp })
    update.pausedChallenges[args.challengeId] = false
  } else {
    update.challenge = Object.assign({}, { timestamp, taskIndex: 0 }, args)
  }

  return { update, response }
}
