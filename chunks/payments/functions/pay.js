const chunky = require('react-cloud-chunky')
const braintree = require('braintree')

const filename = __filename
const auth = { limit: 1 }

const Carmel1K = require('./data/1k.json')

const sendEmail = ({ config, total }) => {

  const email = "dan@fluidtrends.com"

  const userHeader = `Thanks for your €${total} purchase.`
  const subjectUser = `New Carmel Purchase`

  const textUser = `${userHeader}\n\n`
  const htmlUser = `${userHeader}<br/><br/>`

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

const createPayment = ({ account, config, data }) => {
  const userIsMember = (account !== undefined)

  var purchase = Object.assign({}, {
    node: 'payments',
    userIsMember
  }, data, userIsMember && {
    userId: account.user.uid,
    join: {
      users: {
        id: account.user.uid
      }
    }
  })

  return chunky.firebase.operation(account ? 'add' : 'create', purchase)
}

const makeTransaction = ({ gateway, cart, total, payment, email }) => {
  const fields = {}

  return new Promise((resolve, reject) => {
      gateway.transaction.sale(Object.assign({}, {
        paymentMethodNonce: payment.nonce,
        amount: total,
        options: {
          submitForSettlement: true
        }
      }, fields), (error, result) => {
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
  const payment = event.body.payment
  const total = event.body.total
  const cart = event.body.cart
  const email = event.body.email
  const name = event.body.name

  const firstName = name.split()[0]
  const lastName = name.split().length > 1 ? name.split()[0] : ""

  return makeTransaction ({ cart, total, payment, gateway, email })
         .then((result) => createPayment({ account, config, data: {
           total,
           customer: {
             email,
             firstName,
             lastName
           },
           transactionId: result.transaction.id,
           networkTransactionId: result.transaction.networkTransactionId,
           transactionGlobalId: result.transaction.globalId
         }}))
         .then(() => sendEmail({ total, config }))
}

module.exports.main = chunky.handler({ executor, filename, auth })
