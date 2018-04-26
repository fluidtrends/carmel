const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1 }

const getUser = ({ email }) => {
  return chunky.firebase.operation('retrieve', {
    key: 'users',
    orderBy: 'email',
    equalTo: email
  })
  .then((user) => {
    if (!user || user.length === 0) {
      // The user does not exist
      return
    }
    return user
  })
}

const getUserWallet = ({ user }) => {
  return chunky.firebase.operation('retrieve', {
    key: `wallets/${user._id}`
  })
  .then((wallet) => {
    if (!wallet || wallet.length === 0) {
      // This user has no wallet
      return
    }
    return wallet
  })
}

const createMemberPurchase = ({ user, data, wallet }) => {
  return chunky.firebase.operation('add', Object.assign({}, {
    node: 'purchases',
    status: 'pending'
  }, data, {
    from: user.email,
    join: {
      users: {
        id: user._id
      }
    }
  }))
}

const createUserWallet = ({ user }) => {
  return chunky.firebase.operation('add', {
    node: 'wallets',
    status: 'new',
    owner: user.email,
    join: {
      users: {
        id: user._id
      }
    }
  })
}

const createGuestPurchase = ({ email, data }) => {
  return chunky.firebase.operation('create', Object.assign({}, {
    node: 'purchases',
    status: 'pending',
    email
  }, data))
}

function executor ({ event, chunk, config }) {
  chunky.firebase.initialize(config.google)

  return getUser({ email: event.body.email })
    .then((user) => {
      if (!user) {
        return ({ user: false, wallet: false })
      }

      return getUserWallet({ user })
             .then((wallet) => {
               return ({ user, wallet: wallet || false })
             })
    })
    .then(({ user, wallet }) => {
      if (!user) {
        // This is a guest event
        return createGuestPurchase({ email: event.body.email, data: event.body.data })
      }

      if (!wallet) {
        // This user exists but has no wallet, let's make one first
        return createUserWallet({ user })
              .then((wallet) => {
                return createMemberPurchase({ user, data: event.body.data, wallet })
              })
      }

      // This user has a wallet already
      return createMemberPurchase({ user, data: event.body.data, wallet })
    })
}

module.exports.main = chunky.handler({ executor, filename, auth })
