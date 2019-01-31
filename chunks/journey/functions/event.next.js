const casual = require('casual')

module.exports = ({ args, journey, timestamp }) => {
  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  update.challenge = Object.assign({}, { timestamp, taskTotalTime: 0, taskIndex: 0, totalTime: 0 }, args, journey.challenge)
  update.consumedTime = update.consumedTime || 0

  if (!journey.challenge.taskActive) {
    // We're about to start the next task now
    response.taskActive = true
    update.challenge.taskActive = true
    update.challenge.taskStartTime = timestamp

    return { update, response }
  }

  update.challenge.taskTotalTime = (timestamp - journey.challenge.taskStartTime)

  if (args.result.error) {
    // Looks like the task failed
    update.challenge.failures = update.challenge.failures || []
    update.challenge.failures[update.challenge.taskIndex] = update.challenge.failures[update.challenge.taskIndex] || []
    update.challenge.failures[update.challenge.taskIndex].push({ timestamp, error: args.result.error })

    return { update, response }
  }

  // This task passed
  response.taskActive = false
  update.challenge.taskActive = false
  update.challenge.result && delete update.challenge.result

  update.challenge.tasksTime = update.challenge.tasksTime || []
  update.challenge.tasksTime[update.challenge.taskIndex] = update.challenge.taskTotalTime
  update.challenge.taskTotalTime = 0
  update.challenge.totalTime = journey.challenge.totalTime + (timestamp - journey.challenge.taskStartTime)

  if ((journey.challenge.taskIndex + 1) >= journey.challenge.totalTasks) {
    // This was the last task
    response.completed = true

    update.skills = update.skills || {}
    Object.keys(journey.challenge.skills).map(skill => {
      update.skills[skill] = parseInt(update.skills[skill]) || 0
      update.skills[skill] = parseInt(update.skills[skill]) + parseInt(journey.challenge.skills[skill])
    })

    update.completedChallenges = update.completedChallenges || []
    update.completedChallenges.push(Object.assign({}, journey.challenge, { timestamp }))
    update.consumedTime = update.consumedTime + update.challenge.totalTime
    // delete update.challenge
    update.challenge = null
  } else {
    update.challenge.taskIndex = update.challenge.taskIndex + 1
  }

  return { update, response }
}
