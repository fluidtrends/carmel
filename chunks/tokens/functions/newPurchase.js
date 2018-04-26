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
    node: 'prepurchases'
  }, data, {
    userId: user._id,
    userIsMember: true,
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
    userId: user._id,
    join: {
      users: {
        id: user._id
      }
    }
  })
}

const sendPurchaseReport = (purchase, purchaseKey, config) => {
  const email = purchase.userEmail
  const amount = purchase.amount
  const currency = purchase.currency

  const text = Object.keys(purchase).map(key => `${key}: ${purchase[key]}`).join('\n')
  const html = Object.keys(purchase).map(key => `${key}: <strong>${purchase[key]}</strong>`).join('<br/>')
  const subject = `New ${amount} ${currency} purchase from ${email}`

  return chunky.emailer.send({
    to: config.settings.adminEmails,
    from: 'team@carmel.io',
    subject,
    text,
    html
  })
  .then(() => ({
    message: `Purchase initiated. Waiting for transaction (${amount} ${currency}) ...`,
    status: `pending`,
    purchaseKey: `Carmel${purchaseKey._id}`
  }))
}

const createPurchase = (event) => {
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
        throw new Error('Only registered Carmel Members can make purchases.')
      }

      if (!wallet) {
        // This user exists but has no wallet, let's make one first
        return createUserWallet({ user })
              .then((wallet) => {
                return createMemberPurchase(Object.assign({}, { user, wallet, data: event.body }))
              })
      }

      // This user has a wallet already
      return createMemberPurchase(Object.assign({}, { user, wallet, data: event.body }))
    })
}

const createPurchaseKey = (purchase, config) => {
  const data = chunky.cipher.encrypt(purchase, config)
  return chunky.firebase.operation('create', Object.assign({}, {
    node: 'prepurchasekeys',
    data
  }))
}

function executor ({ event, chunk, config }) {
  chunky.firebase.initialize(config.google)

  return createPurchase(event)
        .then((purchase) => {
          return createPurchaseKey(purchase, config).then((purchaseKey) => ({ purchase, purchaseKey }))
        })
        .then(({ purchase, purchaseKey }) => sendPurchaseReport(purchase, purchaseKey, config))
}

module.exports.main = chunky.handler({ executor, filename, auth })
