module.exports = ({ args, journey, timestamp }) => {
  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  if (!journey.challenge) {
    throw new Error("A challenge is not yet in progress")
  }

  if (journey.challenge.taskStartTime) {
    update.challenge.taskTotalTime = journey.challenge.taskTotalTime + (timestamp - journey.challenge.taskStartTime)
    update.challenge.totalTime = journey.challenge.totalTime + (timestamp - journey.challenge.taskStartTime)
    update.challenge.taskActive = false

    update.challenge.taskStartTime && delete update.challenge.taskStartTime
    update.challenge.expectedTaskData && delete update.challenge.expectedTaskData
    update.challenge.result && delete update.challenge.result

    update.challenge.tasksTime = update.challenge.tasksTime || []
    update.challenge.tasksTime[update.challenge.taskIndex] = update.challenge.taskTotalTime
  }

  update.challenge = false
  update.pausedChallenges = update.pausedChallenges || {}
  update.pausedChallenges[journey.challenge.challengeId] = Object.assign({}, journey.challenge, { timestamp })

  return { update, response }
}
