const WORKSPACE = 'workspace'
const CHALLENGE_STARTED = 'challengeStarted'
const CHALLENGE_STOPPED = 'challengeStopped'
const CHALLENGE_CANCELLED = 'challengeCancelled'
const CHALLENGE_COMPLETED = 'challengeCompleted'
const TASK_COMPLETED = 'taskCompleted'

const Achievements = {
  [WORKSPACE]: {
    type: 'bonus',
    once: true,
    reason: "Just because you're awesome.",
    tokens: 5
  },
  [CHALLENGE_STARTED]: {
    type: 'bonus',
    once: true,
    reason: 'Good job starting your first challenge.',
    tokens: 5
  },
  [CHALLENGE_COMPLETED]: {
    type: 'bonus',
    once: true,
    reason: 'You deserve this for completing your first challenge.',
    tokens: 10
  },
  [TASK_COMPLETED]: {
    type: 'bonus',
    once: true,
    reason: "You're even more awesome for completing your first task.",
    tokens: 5
  }
}

module.exports = {
  WORKSPACE,
  CHALLENGE_STARTED,
  CHALLENGE_STOPPED,
  CHALLENGE_COMPLETED,
  CHALLENGE_CANCELLED,
  TASK_COMPLETED,
  Achievements
}
