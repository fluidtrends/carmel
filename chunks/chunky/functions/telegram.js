const chunky = require('react-cloud-chunky')
const Telegraf = require('telegraf')

const filename = __filename
const auth = { limit: 1 }

var bot

const setup = ({ token, webhookUrl }) => {
  if (bot) {
    // Already loaded
    return
  }

  bot = new Telegraf(token, { webhookReply: true })
  bot.telegram.setWebhook(webhookUrl)

  bot.hears('hi', (ctx) => {
    ctx.reply(`Hey ${ctx.message.from.username}`)
  })
}

const executor = ({ event, chunk, config }) => {
  setup(config.settings.telegram.chunkyBot)

  return bot.handleUpdate(event.body)
}

module.exports.main = chunky.handler({ executor, filename, auth })
