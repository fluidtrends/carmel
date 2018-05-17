const chunky = require('react-cloud-chunky')
const Base64 = require('js-base64').Base64

const filename = __filename
const auth = { limit: 1 }

const createPurchaseKey = (purchase, config) => {
  const data = chunky.cipher.encrypt(purchase, config)

  return chunky.firebase.operation('create', Object.assign({}, {
    node: 'purchasekeys',
    data
  }))
}

const createPurchase = ({ account, config, data }) => {
  const userIsMember = (account !== undefined)

  var purchase = Object.assign({}, {
    node: 'purchases',
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

const sendPurchaseReport = ({ purchase, purchaseKey, config, account }) => {
  const email = purchase.email
  const amount = purchase.amount
  const currency = purchase.currency

  const userHeader = `Thanks for believing in Carmel. You will receive your new Carmel Tokens as soon as your transaction is verified.`
  const userFields = { status: 'Waiting for your transaction ...', amount: purchase.amount, currency: purchase.currency.toUpperCase(), tokens: purchase.tokens.toLocaleString('en') }
  const textUser = `${userHeader}\n\n` + Object.keys(userFields).map(key => `${key}: ${userFields[key]}`).join('\n')
  const htmlUser = `${userHeader}<br/><br/>` + Object.keys(userFields).map(key => `${key}: <strong>${userFields[key]}</strong>`).join('<br/>')
  const subjectUser = `Congrats on your new ${purchase.tokens.toLocaleString('en')} Carmel Tokens purchase`

  return chunky.emailer.send({
    to: [email],
    from: config.settings.fromEmail,
    subject: subjectUser,
    text: textUser,
    html: htmlUser
  })
  .then(() => ({
    message: `Waiting for transaction (${amount} ${currency}) ...`,
    status: `pending`,
    purchaseKey: '0x' + Buffer.from(`CARMEL${Base64.encode(purchaseKey._id)}`).toString('hex')
  }))
}

function executor ({ event, chunk, config, account }) {
  return createPurchase({ account, config, data: event.body })
         .then((purchase) => createPurchaseKey(purchase, config).then((purchaseKey) => ({ purchase, purchaseKey })))
         .then(({ purchase, purchaseKey }) => sendPurchaseReport({ account, purchase, purchaseKey, config }))
}

module.exports.main = chunky.handler({ executor, filename, auth })
