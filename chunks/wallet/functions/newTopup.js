const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1 }

const sendEmail = ({ config, fields }) => {

  const email = "dan@fluidtrends.com"

  const userHeader = `Thanks for believing in Carmel.`
  const subjectUser = `New Top Up`

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

function executor ({ event, chunk, config, account }) {
  // const amount = event.body.amount
  // const userId = account.user.uid
  // const to = event.body.to
  // const type = event.body.type || 'transfer'
  // const data = event.body.data || ''

  const fields = event.body
  return sendEmail({ config, fields })

  //
  // return updateWalletTokens(userId, -amount, true)
  //               .then(() => updateWalletTokens(to, amount))
  //               .then(() => createTransfer(userId, to, amount, type, data))
  //               .then((result) => createPostTransfer(userId, to, amount, result, type, data))
}

module.exports.main = chunky.handler({ executor, filename, auth })


// const https = require('https')
//
// const options = {
//   host: 'indacoin.com',
//   path: '/api/exgw_createTransaction',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// }
//
// https://indacoin.com/gw/payment_form?partner=carmel&cur_from=usd&cur_to=eth&amount=30&success_url=https://carmel.io/services&address=0xC22572fD28531E5B43293F9A552882732307741E&user_id=idancalinescu%40gmail.com
//
// function sleep(ms){
//     return new Promise(resolve=>{
//         setTimeout(resolve,ms)
//     })
// }
//
// async function start() {
//
//   const req = https.request(options, (res) => {
//     let data = ''
//
//     res.on('data', (chunk) => {
//       data += chunk
//     })
//
//     res.on('end', () => {
//       // console.log(JSON.parse(data))
//       console.log(data)
//     })
//
//     res.on('error', (e) => {
//       console.log("error", e)
//     })
//     // console.log(res)
//   })
//
//    req.write(JSON.stringify({
//      "cur_in": "usd",
//      "user_id": "idancali",
//      "cur_out":  "eth",
//      "target_address": "0xC22572fD28531E5B43293F9A552882732307741E",
//      "amount_in": '30'
//    }))
//
//    req.end()
//
//    await sleep(50000)
// }
//
// start()
