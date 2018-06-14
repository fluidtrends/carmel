const chunky = require('react-cloud-chunky')
const Base64 = require('js-base64').Base64

const filename = __filename
const auth = { limit: 1 }
const MyEtherWalletUrl = `https://www.myetherwallet.com`

// Carmel Private Sale Address
const address = '0x4E52e804905CC320BF631523a9cb1416B8d613Fb'
const total = 50

const message = ({ tokens, link, sep }) => {
  return `Hey there,${sep}
${sep}
I am Andrei, Co-founder and Community Manager at Carmel. I'm here to welcome you on our #RoadTo1B lives changed.${sep}
${sep}
I've noticed that you've tried to buy ${tokens} Carmel tokens recently. Thanks for believing in Carmel - we really appreciate your contribution and your involvement. This would not be possible without you and the rest of our amazing community.${sep}
${sep}
So you started your purchase recently 👍 but have not completed it 😢 - but hey, not to worry, you're just one click away from getting Your ⭐️ ${tokens} CARMEL tokens ⭐️. ${sep}
${sep}
Just press the link below to complete your purchase.${sep}
${sep}
${link}${sep}
${sep}
Oh - and welcome to Carmel 😉${sep}
${sep}
If I can help you out in any way, just let me know. I am here to listen 😁${sep}
${sep}
---${sep}
${sep}
이봐,${sep}
${sep}
나는 Andrei, Carmel 공동 창업자이자 지역 관리자입니다. #RoadTo1B 의 생명이 바뀌 었음을 환영하기 위해 왔습니다.${sep}
${sep}
나는 당신이 ${tokens} Carmel 토큰을 최근에 사려고했음을 알았습니다. Carmel 을 믿어 주셔서 감사합니다 - 우리는 귀하의 기여와 귀하의 참여에 진심으로 감사드립니다. 당신과 우리의 놀라운 공동체가 없으면이 일은 불가능합니다.${sep}
${sep}
그래서 당신은 최근에 구입을 시작했으나 완료하지는 않았습니다.하지만 걱정하지 마세요. ⭐️ ${tokens} CARMEL 토큰을 한 번만 클릭하면됩니다.${sep}
${sep}
아래 링크를 누르면 구매가 완료됩니다.${sep}
${sep}
${link}${sep}
${sep}
오 - 카멜에 오신 것을 환영합니다${sep}
${sep}
내가 어떤 식 으로든 너를 도울 수 있다면 알려주지. 나는 여기 듣고있다.${sep}
`
}

const recordUpdate = ({ purchase, status }) => {
  const record = Object.assign({}, {
    node: 'reports',
    status,
    sentOn: `${Date.now()}`
  }, {
    join: {
      purchases: {
        id: purchase._id
      }
    }
  })

  return chunky.firebase.operation('add', record)
}

const sendUpdate = ({ purchase, purchaseKey, link, config }) => {
  const email = purchase.email
  const amount = purchase.amount
  const currency = purchase.currency.toUpperCase()
  const tokens = purchase.tokens.toLocaleString('en')

  const textUser = message({ tokens, link, sep: `\n` })
  const htmlUser = message({ tokens, sep: `<br/>`, link: `<a href="${link}"> ⭐️ SEND ${amount} ${currency} ⭐️ </a>` })

  const subjectUser = `Your New ⭐️ ${tokens} CARMEL ⭐️ are waiting ... 😁.`

  return chunky.emailer.send({
    to: [email],
    from: config.settings.fromPersonalEmail,
    subject: subjectUser,
    text: textUser,
    html: htmlUser
  })
  .then(() => recordUpdate({ purchase, status: 'sent' }))
  .then(() => ({
    message: `Message sent (${amount} ${currency}).`,
    status: `done`
  }))
}

const purchaseLink = ({ purchase, purchaseKey }) => {
  const key = '0x' + Buffer.from(`CARMEL${Base64.encode(purchaseKey._id)}`).toString('hex')
  return `${MyEtherWalletUrl}/?to=${address}&value=${purchase.amount}&data=${key}#send-transaction`
}

const getPurchases = () => {
  return chunky.firebase.operation('retrieve', Object.assign({}, {
    key: 'purchases'
  }))
  .then((data) => (!Array.isArray(data) ? [data] : data))
}

const getPurchaseKeys = (purchases) => {
  return chunky.firebase.operation('retrieve', Object.assign({}, {
    key: 'purchasekeys'
  }))
  .then((data) => (!Array.isArray(data) ? [data] : data))
  .then((purchaseKeys) => ({ purchases, purchaseKeys }))
}

const filterTransactions = (transactions) => {
  if (!transactions || transactions.length === 0) {
    return []
  }

  var newTransactions = []
  transactions.forEach(transaction => {
    var purchaseKey = Buffer.from(transaction.input.substring(2), 'hex').toString()

    if (purchaseKey.substring(0, 6).toLowerCase() === 'carmel') {
      newTransactions.push(Object.assign({}, transaction, { purchaseKey }))
    }
  })

  return newTransactions
}

const getTransactions = (purchases, purchaseKeys, config) => {
  return chunky.etherscan.transactions(config.settings.etherscan.apiKey, { address, total })
               .then((transactions) => filterTransactions(transactions))
               .then((transactions) => ({ transactions, purchases, purchaseKeys }))
}

const verifyPurchase = (purchase, original) => {
  if (!purchase || !original) {
    return false
  }

  return (original._id === purchase._id &&
        original.price === purchase.price &&
        original.email === purchase.email &&
        original.currency === purchase.currency &&
        original.amount === purchase.amount)
}

const findPurchase = (purchase, purchases) => {
  if (!purchase || !purchases) {
    return
  }

  var found

  purchases.forEach(p => {
    if (p._id !== purchase._id) {
      return
    }
    found = Object.assign({}, p)
  })

  return found
}

const decodePurchase = ({ purchaseKey, config }) => {
  try {
    const decodedData = chunky.cipher.decrypt(purchaseKey.data, config)
    return JSON.parse(decodedData)
  } catch (error) {
  }
}

const findTransaction = ({ purchaseKey, transactions, purchases, config }) => {
  var transaction

  transactions.forEach(t => {
    const decodedKey = Base64.decode(t.purchaseKey.substring(6))

    if (decodedKey !== purchaseKey._id) {
      return
    }

    try {
      const decodedData = chunky.cipher.decrypt(purchaseKey.data, config)
      const purchase = JSON.parse(decodedData)
      const original = findPurchase(purchase, purchases)
      const verified = verifyPurchase(purchase, original)

      if (verified && (parseInt(t.isError) === 0)) {
        transaction = { data: t, purchase: original, purchaseKey }
      }
    } catch (error) {
    }
  })

  return transaction
}

const verifyTransactions = ({ purchases, purchaseKeys, transactions, config }) => {
  if (!transactions || transactions.length === 0) {
    return Promise.resolve({ message: 'No new transactions found' })
  }

  if (!purchaseKeys || purchaseKeys.length === 0) {
    return Promise.resolve({ message: 'No pending purchases' })
  }

  var expectedPurchases = []

  purchaseKeys.forEach(purchaseKey => {
    const transaction = findTransaction({ purchaseKey, transactions, config, purchases })

    if (transaction) {
      return
    }

    const purchase = decodePurchase({ purchaseKey, config })
    const link = purchaseLink({ purchase, purchaseKey })

    expectedPurchases.push({ purchase, purchaseKey, link })
  })

  if (expectedPurchases.length === 0) {
    return Promise.resolve({
      message: `Found no expected purchases out of ${purchaseKeys.length} total.`
    })
  }

  const updates = expectedPurchases.map(({ purchase, purchaseKey, link }) => sendUpdate({ purchase, purchaseKey, link, config }))
  return Promise.all(updates)
          .then(() => ({
            expectedPurchases,
            message: `${expectedPurchases.length} new purchases found and ${updates.length} messages sent.`
          }))
}

function executor ({ event, chunk, config }) {
  return getPurchases()
        .then((purchases) => getPurchaseKeys(purchases))
        .then(({ purchases, purchaseKeys }) => getTransactions(purchases, purchaseKeys, config))
        .then(({ purchases, transactions, purchaseKeys }) => verifyTransactions({ purchases, purchaseKeys, transactions, config }))
}

module.exports.main = chunky.handler({ executor, filename, auth })
