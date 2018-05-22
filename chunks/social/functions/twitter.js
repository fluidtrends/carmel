const Twitter = require('twitter')
const chunky = require('react-cloud-chunky')

const filename = __filename
const auth = { limit: 1, private: true }

const statuses = [
  `#IBelieveInCarmel and I just joined the #CarmelRevolution @CarmelPlatform #Carmel - Follow the #CarmelStory https://carmel.io`,
  `I just joined @CarmelPlatform and I'm loving it - #Carmel #IBelieveInCarmel - Follow the #CarmelStory https://carmel.io`,
  `@CarmelPlatform is awesome - I just joined and I'm loving it - #Carmel #IBelieveInCarmel - Follow the #CarmelStory https://carmel.io`
]

const getProfile = (userId) => {
  return new Promise((resolve, reject) => {
    return chunky.firebase.operation('retrieve', { key: `users-profiles/${userId}` })
          .then((profile) => chunky.firebase.operation('retrieve', { key: `profiles/${profile._id}` }))
          .then((profile) => ((!profile || (Array.isArray(profile) && profile.length === 0)) ? resolve() : resolve(profile)))
          .catch(() => resolve())
  })
}

const updateProfile = (data, userId) => {
  return getProfile(userId).then((profile) => {
    return chunky.firebase.operation('update', Object.assign({}, { key: `profiles/${profile._id}` }, data))
           .then(() => chunky.firebase.operation('update', { key: `users-profiles/${userId}/${profile._id}`, timestamp: `${Date.now()}` }))
  })
}

const tweet = (client) => {
  const tweetId = Math.floor(Math.random() * Math.floor(statuses.length))

  return new Promise((resolve, reject) => {
    client.post('statuses/update', { status: statuses[tweetId] }, (error, tweet, response) => {
      if (error) {
        reject(error)
        return
      }

      resolve({ tweet, response })
    })
  })
}

const getAccount = (client) => {
  return new Promise((resolve, reject) => {
    client.get('account/settings', {}, (error, account, response) => {
      if (error) {
        reject(error)
        return
      }

      resolve({ account, response })
    })
  })
}

const friendship = (client) => {
  return new Promise((resolve, reject) => {
    client.get('friendships/lookup', { screen_name: 'carmelplatform' }, (error, friendship, response) => {
      if (error) {
        reject(error)
        return
      }

      resolve({ friendship, response })
    })
  })
}

const follow = (client) => {
  return new Promise((resolve, reject) => {
    client.post('friendships/create', { screen_name: 'carmelplatform' }, (error, friendship, response) => {
      if (error) {
        reject(error)
        return
      }

      resolve({ friendship, response })
    })
  })
}

function executor ({ event, chunk, config, account }) {
  const client = new Twitter({
    consumer_key: config.settings.twitter.mainApp.apiKey,
    consumer_secret: config.settings.twitter.mainApp.apiSecret,
    access_token_key: event.body.accessToken,
    access_token_secret: event.body.tokenSecret
  })

  return friendship(client)
         .then(({ friendship }) => {
           var found = false

           if (friendship && friendship.length >= 1) {
             friendship[0].connections.forEach(c => {
               if (c === 'carmelplatform') {
                 found = true
               }
             })
           }

           if (!found) {
             return follow(client)
           }
         })
         // .then(() => tweet(client))
         .then(() => getAccount(client))
         .then((profile) => updateProfile({ twitterUsername: profile.account.screen_name }, event.body.userId))
}

module.exports.main = chunky.handler({ executor, filename, auth })
