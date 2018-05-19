const Twitter = require('twitter')
const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1 }

function executor ({ event, chunk, config, account }) {
  const client = new Twitter({
    consumer_key: config.settings.twitter.mainApp.apiKey,
    consumer_secret: config.settings.twitter.mainApp.apiSecret,
    access_token_key: config.settings.twitter.mainApp.accessToken,
    access_token_secret: config.settings.twitter.mainApp.tokenSecret
  })

  return new Promise((resolve, reject) => {
    const params = { screen_name: 'carmelplatform' }
    client.get('followers/list', params, (error, tweets, response) => {
      if (error) {
        reject(error)
        return
      }

      const users = tweets.users
      resolve({ users })
    })
  })
}

module.exports.main = chunky.handler({ executor, filename, auth })
