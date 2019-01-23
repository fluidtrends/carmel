const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

function executor ({ event, chunk, config, account }) {
  return chunky.firebase.operation('retrieve', { key: `users-challenges/${account.user.uid}` })
               .then((challenges) => {
                  return Promise.resolve({ challenges })
               })
}

module.exports.main = chunky.handler({ executor, filename, auth })
