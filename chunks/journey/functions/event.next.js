module.exports = ({ args, journey, timestamp }) => {
  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  update.challenge = Object.assign({}, { timestamp, taskIndex: 0, totalTime: 0 }, args, journey.challenge)

  if (!journey.challenge.taskActive) {
    const expected = generateExpected(args.expected)
    response.expected = Object.assign({}, expected)
    response.taskActive = true
    update.challenge.expectedTaskData = Object.assign({}, expected)
    update.challenge.taskActive = true
    update.challenge.taskStartTime = timestamp
  } else {
    response.taskActive = false
    response.expected = Object.assign({}, update.challenge.expectedTaskData)
    delete update.challenge.expectedTaskData
    update.challenge.taskActive = false
    update.challenge.totalTime = journey.challenge.totalTime + (timestamp - journey.challenge.taskStartTime)
    update.challenge.elapsedTime = update.challenge.elapsedTime || []
    update.challenge.elapsedTime.push((timestamp - journey.challenge.taskStartTime))

    if ((journey.challenge.taskIndex + 1) >= journey.challenge.totalTasks) {
      response.completed = true
      response.elapsedTime = (timestamp - journey.challenge.taskStartTime)
      response.totalTime = update.challenge.totalTime
      update.completedChallenges = update.completedChallenges || []
      update.completedChallenges.push(Object.assign({}, journey.challenge, { timestamp }))
      update.challenge = false
    } else {
      update.challenge.taskIndex = update.challenge.taskIndex + 1
    }
  }
  update.challenge.expected && delete update.challenge.expected

  return { update, response }
}
