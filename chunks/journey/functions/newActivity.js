const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const createActivity = (account, data) => {
  const op = Object.assign({}, {
    node: 'activities'
  }, data, {
    userId: account.user.uid,
    join: {
      users: {
        id: account.user.uid
      }
    }
  })

  return chunky.firebase.operation('add', op)
}

function executor ({ event, chunk, config, account }) {
  return createActivity(account, event.body)
}

module.exports.main = chunky.handler({ executor, filename, auth })

// // PLAYGROUND FAILED
// this.props.newActivity({
//   type: "taskVerification",
//   source: "web/playground",
//   error: "dkdkdkdkd error stack"
// })
//
// // PLAYGROUND PASSED
// this.props.newActivity({
//   type: "taskVerification",
//   source: "web/playground",
//   success: true
// })
//
// // CLI FAILED
// this.props.newActivity({
//   type: "taskVerification",
//   source: "cli",
//   status: "failed",
//   reason: "dkdkdkdkd error stack"
// })
//
// workspaces: {
//   activeChallenge: {
//     id: "initial",
//     lastUpdatedTimestamp: 33333333,
//     verifying: true,
//     currentTaskFails: [{
//       timestamp: 3903903939393,
//       reason: 'ddddddd',
//       consumedSeconds: 24
//     }],
//     completedTasks: [{
//       completedTimestamp: 22222222,
//       consumedSeconds: 500
//     }]
//   },
//   pausedChallenges: [{
//     id: "helloWorld",
//     completedTasks: []
//   }, {
//     id: "blog",
//     completedTasks: []
//   }]
// }
//
// achievements: {
//   skills: [{
//     id: "json",
//     weight: 23
//   }, {
//     id: "javascript",
//     weight: 11
//   }],
//   badges: [{
//     id: "earlyAdopter"
//   }],
//   completedChallenges: [{
//     id: "initProduct",
//     timestamp: 293848239292,
//     skills: [{
//       id: "json",
//       weight: 1
//     }],
//     badges: [{
//       id: "earlyAdopter"
//     }],
//     xp: 5,
//     tokens: 0,
//     tasks: [{
//       completedTimestamp: 22222222,
//       consumedSeconds: 500
//     }]
//   }]
// }
