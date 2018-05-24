const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const findRedeemableTransactions = ({ account }) => {
  return chunky.firebase.operation('retrieve', {
    key: 'guesttransactions',
    orderBy: 'email',
    equalTo: account.user.email
  })
}

function executor ({ event, chunk, config, account }) {
  return findRedeemableTransactions({ account })
}

module.exports.main = chunky.handler({ executor, filename, auth })
