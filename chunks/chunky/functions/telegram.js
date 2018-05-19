const chunky = require('react-cloud-chunky')
const Telegraf = require('telegraf')

const filename = __filename
const auth = { limit: 1 }

const executor = ({ event, chunk, config }) => {
  const bot = new Telegraf(config.telegram.chunkyBot.token)

  return Promise.resolve({ bot })
}

module.exports.main = chunky.handler({ executor, filename, auth })
