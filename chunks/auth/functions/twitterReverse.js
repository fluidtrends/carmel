const chunky = require('react-cloud-chunky')
const request = require('request')

const filename = __filename
const auth = { limit: 1 }

const getRequestToken = ({ config }) => {
  return new Promise((resolve, reject) => {
    request.post({
      url: 'https://api.twitter.com/oauth/request_token',
      oauth: {
        oauth_callback: config.settings.twitter.mainApp.callbackUrl,
        consumer_key: config.settings.twitter.mainApp.apiKey,
        consumer_secret: config.settings.twitter.mainApp.apiSecret
      }
    }, (err, r, data) => {
      if (err) {
        reject(err)
        return
      }

      var token = '{ "' + data.replace(/&/g, '", "').replace(/=/g, '": "') + '"}'
      token = JSON.parse(token)
      resolve({ token })
    })
  })
}

function executor ({ event, chunk, config, account }) {
  return getRequestToken({ config })
}

module.exports.main = chunky.handler({ executor, filename, auth })
