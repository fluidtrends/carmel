const chunky = require('react-cloud-chunky')
const { IncomingWebhook } = require('@slack/client')

const filename = __filename
const auth = { limit: 1 }

const attachment = (args, account) => {
  const pretext = `New message from ${args.name} <${args.email}>`
  const title = `${args.title}`
  const text = `${args.text}`
  const footer = `From the ${args.type} guild (${account ? 'member' : 'guest'})`

  var fields

  if (args.fields) {
    fields = []
    Object.keys(args.fields).map(field => {
      fields.push({ title: field, value: args.fields[field] })
    })
  }

  return Object.assign({}, {
      title,
      pretext,
      text,
      footer,
      ts: `${Date.now()}`,
      "mrkdwn_in": ["text", "pretext"]
    },
    args.link && { title_link: args.link },
    args.fields && { fields })
}

function executor ({ event, chunk, config, account }) {
  if (event.body.challenge) {
    return Promise.resolve({ challenge: event.body.challenge })
  }

  if (!event.body.name ||
      !event.body.email ||
      !event.body.title ||
      !event.body.text) {
      return Promise.resolve()
  }

  const attachments = {
    attachments: [attachment(event.body, account)]
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
    webhook.send(attachments, (err, res) => {
      resolve()
    })
  })
}

module.exports.main = chunky.handler({ executor, filename, auth })
