const casual = require('casual')

const generateExpected = (expected) => {
  if (!expected) {
    return {}
  }

  var result = {}
  Object.keys(expected).map(e => {
    try {
      result[e] = casual.populate(`{{${expected[e]}}}`)
    } catch (e) {
    }
  })

  return result
}

module.exports = ({ args, journey, timestamp }) => {
  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  update.challenge = Object.assign({}, { timestamp, taskTotalTime: 0, taskIndex: 0, totalTime: 0 }, args, journey.challenge)
  update.consumedTime = update.consumedTime || 0

  if (!journey.challenge.taskActive) {
    // We're about to start the next task now
    const expected = generateExpected(args.expected)
    response.expected = Object.assign({}, expected)
    response.taskActive = true
    update.challenge.expectedTaskData = Object.assign({}, expected)
    update.challenge.taskActive = true
    update.challenge.taskStartTime = timestamp

    update.challenge.expected && delete update.challenge.expected
    return { update, response }
  }

  update.challenge.taskTotalTime = (timestamp - journey.challenge.taskStartTime)
  update.challenge.totalTime = journey.challenge.totalTime + (timestamp - journey.challenge.taskStartTime)

  if (args.result.error) {
    // Looks like the task failed
    update.challenge.failures = update.challenge.failures || []
    update.challenge.failures[update.challenge.taskIndex] = update.challenge.failures[update.challenge.taskIndex] || []
    update.challenge.failures[update.challenge.taskIndex].push({ timestamp, error: args.result.error })

    update.challenge.expected && delete update.challenge.expected
    return { update, response }
  }

  // This task passed
  response.taskActive = false
  response.expected = Object.assign({}, update.challenge.expectedTaskData)
  delete update.challenge.expectedTaskData
  update.challenge.taskActive = false
  update.challenge.result && delete update.challenge.result

  update.challenge.tasksTime = update.challenge.tasksTime || []
  update.challenge.tasksTime[update.challenge.taskIndex] = update.challenge.taskTotalTime
  update.challenge.taskTotalTime = 0

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
  } else {
    update.challenge.taskIndex = update.challenge.taskIndex + 1
  }

  update.challenge.expected && delete update.challenge.expected

  return { update, response }
}
