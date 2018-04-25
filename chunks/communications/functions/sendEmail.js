const chunky = require('react-cloud-chunky')

function createRequest ({ to, from, subject, text, html }) {
  return ({
    Destination: {
      ToAddresses: to
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html
        },
        Text: {
          Charset: 'UTF-8',
          Data: text
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
    ReturnPath: from,
    Source: from
  })
}

function main ({ event, chunk, config }) {
  return new Promise((resolve, reject) => {
    const request = createRequest({
      to: config.settings.adminEmails,
      from: 'team@carmel.io',
      subject: 'Carmel Notification',
      text: event.body.text,
      html: event.body.html
    })

    chunky.aws.ses.sendEmail(request, (error, data) => {
      if (error) {
        resolve({ sent: false })
        return
      }
      resolve({ sent: true })
    })
  })
}

module.exports.main = chunky.handler(main, __filename)
