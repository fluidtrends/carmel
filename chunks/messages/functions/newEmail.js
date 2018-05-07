const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1 }

const executor = ({ event, chunk, config }) => {
  return chunky.emailer.send({
    to: config.settings.adminEmails,
    from: 'team@carmel.io',
    subject: 'Carmel Notification',
    text: event.body.text,
    html: event.body.html
  })
}

module.exports.main = chunky.handler({ executor, filename, auth })
