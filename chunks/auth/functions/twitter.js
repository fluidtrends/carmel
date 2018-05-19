const Twitter = require('twitter')
const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1 }

const client = new Twitter({
  consumer_key: 'tfTwLJmHxjaPpKexsQZaYBfE0',
  consumer_secret: '17xIY3GlZJx1RxwQqOMHlR0jdKfD2OPBil1t6Nb08wx7hSFKyJ',
  access_token_key: '849617843872309248-DHJkblNaeROYdf42D3QaAff3fjJyuMM',
  access_token_secret: 'QHuctybdM4dH44zDrhSOFSg0AbG3ZHwgHA817CmYHF3rR'
})

function executor ({ event, chunk, config, account }) {
  return new Promise((resolve, reject) => {
    const params = { screen_name: 'carmelplatform' }
    client.get('statuses/user_timeline', params, (error, tweets, response) => {
      if (error) {
        reject(error)
        return
      }
      resolve({ tweets, response })
    })
  })
}

module.exports.main = chunky.handler({ executor, filename, auth })
