const chunky = require('react-cloud-chunky')
const braintree = require('braintree')

const filename = __filename
const auth = { limit: 1 }

const Carmel1K = require('./1k.json')

const sendEmail = ({ config, fields }) => {

  const email = "dan@fluidtrends.com"

  const userHeader = `This is a new token.`
  const subjectUser = `New Client`

  const textUser = `${userHeader}\n\n` + Object.keys(fields).map(key => `${key}: ${fields[key]}`).join('\n')
  const htmlUser = `${userHeader}<br/><br/>` + Object.keys(fields).map(key => `${key}: <strong>${fields[key]}</strong>`).join('<br/>')

  return chunky.emailer.send({
    to: [email],
    from: config.settings.fromEmail,
    subject: subjectUser,
    text: textUser,
    html: htmlUser
  })
}

const makeGateway = ({ config }) => {
  return braintree.connect({
    environment: braintree.Environment[config.settings.braintree.environment],
    merchantId: config.settings.braintree.merchantId,
    publicKey: config.settings.braintree.publicKey,
    privateKey:config.settings.braintree.privateKey
  })
}

const generateToken = ({ gateway, customerId }) => {
  return new Promise((resolve, reject) => {

    gateway.clientToken.generate(Object.assign({}, customerId && { customerId }), (error, response) => {
      if (response) {
        resolve(Object.assign({}, { Carmel1K }, response))
        return
      }

      reject(error)
    })
  })
}

function executor ({ event, chunk, config, account }) {

  const gateway = makeGateway({ config })
  const customerId = event.body.customerId

  return generateToken ({ customerId, gateway })
}

module.exports.main = chunky.handler({ executor, filename, auth })
