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

function sendEmail ({ config, text, html }) {
  return chunky.emailer.send({
    to: config.settings.adminEmails,
    from: 'team@carmel.io',
    subject: 'New Carmel Purchase',
    text,
    html
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

    const successMemberText = (data) => `Member ${data.from} (${data.address}) just purchased ${data.amount} ${data.type}`
    const successMemberHtml = (data) => `Member ${data.from} (${data.address}) just purchased <strong> ${data.amount} ${data.type} </strong>`
    const successGuestText = (data) => `Guest ${data.email} (${data.address}) just purchased ${data.amount} ${data.type}`
    const successGuestHtml = (data) => `Guest ${data.email} (${data.address}) just purchased <strong>${data.amount} ${data.type}</strong>`

    getUser(event.body.email)
    .then((user) => createMemberPurchase(user, event.body.data))
    .then((data) => {
      resolve({ message: 'Member purchase pending', data })
    })
    .catch(() => {
      return createGuestPurchase(event.body.email, event.body.data)
             .then((data) => {
               resolve({ message: 'Member purchase pending', data })
             })
    })
  })
}

module.exports.main = chunky.handler(main, __filename)
