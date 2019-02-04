const chunky = require('react-cloud-chunky')
const { IncomingWebhook } = require('@slack/client')

const filename = __filename
const auth = { limit: 1 }

function executor ({ event, chunk, config, account }) {
  if (event.body.challenge) {
    return Promise.resolve({ challenge: event.body.challenge })
  }

  if (!event.body.message) {
    return Promise.resolve()
  }

  const webhook = new IncomingWebhook(config.settings.slack.hooks.community)

  // chunky.emailer.send({
  //   to: ["dan@fluidtrends.com"],
  //   from: config.settings.fromEmail,
  //   subject: "New message",
  //   text: event.body.message,
  //   html: event.body.message
  // })

  return new Promise((resolve, reject) => {
    webhook.send(event.body.message, (err, res) => {
      resolve())
    })
  })
}

module.exports.main = chunky.handler({ executor, filename, auth })
