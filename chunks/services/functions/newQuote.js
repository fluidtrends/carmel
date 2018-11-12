const chunky = require('react-cloud-chunky')
const moment = require('moment')

const filename = __filename
const auth = { limit: 1 }

const sendEmail = ({ quote, config }) => {
  const email = 'dan@fluidtrends.com'

  const userHeader = `New Carmel Quote`
  const textUser = `${userHeader}\n\n` + Object.keys(quote).map(key => `${key}: ${quote[key]}`).join('\n')
  const htmlUser = `${userHeader}<br/><br/>` + Object.keys(quote).map(key => `${key}: <strong>${quote[key]}</strong>`).join('<br/>')
  const subjectUser = `New Carmel Quote`

  return chunky.emailer.send({
    to: [email],
    from: config.settings.fromEmail,
    subject: subjectUser,
    text: textUser,
    html: htmlUser
  })
  .then(() => ({
    message: `Quote sent`,
    status: `done`
  }))
}

function executor ({ event, chunk, config, account }) {
  const data = event.body
  return chunky.firebase.operation('create', Object.assign({}, { node: 'quotes' }, data))
               .then(() => sendEmail())
}

module.exports.main = chunky.handler({ executor, filename, auth })
