const chunky = require('react-cloud-chunky')

function getUser (email) {
  return chunky.firebase.operation('retrieve', {
    key: 'users',
    orderBy: 'email',
    equalTo: email
  })
  .then(data => {
    if (!data || data.length === 0) {
      throw new Error('No user')
    }
    return data
  })
}

function createMemberPurchase (user, purchase) {
  return chunky.firebase.operation('add', Object.assign({}, {
    node: 'purchases',
    status: 'pending'
  }, purchase, {
    from: user.email,
    join: {
      users: {
        id: user._id
      }
    }
  }))
}

function createGuestPurchase (email, purchase) {
  return chunky.firebase.operation('create', Object.assign({}, {
    node: 'purchases',
    status: 'pending',
    email
  }, purchase))
}

function main ({ event, chunk, config, log }) {
  return new Promise((resolve, reject) => {
    chunky.firebase.initialize(config.google)

    getUser(event.body.email)
    .then((user) => createMemberPurchase(user, event.body.data))
    .then(() => resolve({ message: 'Member purchase pending' }))
    .catch(() => {
      createGuestPurchase(event.body.email, event.body.data)
      .then(() => resolve({ message: 'Guest purchase pending' }))
    })
  })
}

module.exports.main = chunky.handler(main, __filename)
