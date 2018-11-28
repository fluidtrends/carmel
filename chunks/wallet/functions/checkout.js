const chunky = require('react-cloud-chunky')
const braintree = require('braintree')

const filename = __filename
const auth = { limit: 1 }

const sendEmail = ({ config, fields }) => {

  const email = "dan@fluidtrends.com"

  const userHeader = `Thanks for believing in Carmel.`
  const subjectUser = `New Credits Purchase`

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

const makeTransaction = ({ gateway, nonce, amount }) => {
  return new Promise((resolve, reject) => {
      gateway.transaction.sale({
        amount,
        paymentMethodNonce: nonce,
        options: {
          submitForSettlement: true
        }
      }, (error, result) => {
        if (result) {
          resolve(result)
          return
        }

        reject(error)
      })
  })
}

function executor ({ event, chunk, config, account }) {

  const gateway = makeGateway({ config })
  const nonce = event.body.paymentMethodNonce
  const amount = event.body.amount

  return makeTransaction ({ amount, nonce, gateway })
}

module.exports.main = chunky.handler({ executor, filename, auth })
