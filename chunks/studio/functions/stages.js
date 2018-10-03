const WORKSPACE = 'workspace'
const CHALLENGE_STARTED = 'challengeStarted'
const CHALLENGE_STOPPED = 'challengeStopped'
const CHALLENGE_CANCELLED = 'challengeCancelled'
const CHALLENGE_COMPLETED = 'challengeCompleted'
const CHALLENGE_RATED = 'challengeRated'
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
    reason: 'Amazing job on starting your first challenge.',
    tokens: 5
  },
  [CHALLENGE_COMPLETED]: {
    type: 'bonus',
    once: true,
    reason: 'You deserve this for completing your first challenge.',
    tokens: 10
  },
  [CHALLENGE_RATED]: {
    type: 'bonus',
    once: true,
    reason: 'Thanks for rating your first challenge.',
    tokens: 5
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
  CHALLENGE_RATED,
  TASK_COMPLETED,
  Achievements
}
