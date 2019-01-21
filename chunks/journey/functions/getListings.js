const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

// const getWallet = (userId) => {
//   return new Promise((resolve, reject) => {
//     chunky.firebase.operation('retrieve', { key: `users-wallets/${userId}` })
//           .then((wallet) => chunky.firebase.operation('retrieve', { key: `wallets/${wallet._id}` }))
//           .then((wallet) => ((!wallet || (Array.isArray(wallet) && wallet.length === 0)) ? resolve() : resolve(wallet)))
//           .catch(() => resolve())
//   })
// }
//

function executor ({ event, chunk, config, account }) {
  return chunky.firebase.operation('retrieve', { key: `users-challenges/${account.user.uid}` })
               .then((challenges) => {
                  return Promise.resolve({ challenges })
               })
}

module.exports.main = chunky.handler({ executor, filename, auth })
