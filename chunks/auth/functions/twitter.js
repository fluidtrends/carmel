const Twitter = require('twitter')
const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1 }

function executor ({ event, chunk, config, account }) {
  const client = new Twitter({
    consumer_key: config.twitter.mainApp.apiKey,
    consumer_secret: config.twitter.mainApp.apiSecret,
    access_token_key: config.twitter.mainApp.accessToken,
    access_token_secret: config.twitter.mainApp.tokenSecret
  })

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
