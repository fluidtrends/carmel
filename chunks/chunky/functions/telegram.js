const chunky = require('react-cloud-chunky')
const Telegraf = require('telegraf')
const nlp = require('compromise')

const filename = __filename
const auth = { limit: 1 }

var bot

const CarmelChatId = -1001260890160

const hello = (ctx) => {
  const isCarmelChannel = (ctx.chat.id === CarmelChatId)

  if (!isCarmelChannel) {
    ctx.reply(`Hey @${ctx.message.from.username}, what can I do for you today? 😀`)
    return
  }

  ctx.reply(`Hey @${ctx.message.from.username}, welcome to Carmel. What can I do for you today? 😀`)
}

const verify = (ctx) => {
  const isCarmelChannel = (ctx.chat.id === CarmelChatId)

  if (!isCarmelChannel) {
    ctx.reply(`Hey @${ctx.message.from.username}, what am I, the police? 😀`)
    return
  }

  ctx.reply(`Hey @${ctx.message.from.username} 😀`)
}

const setup = ({ token, webhookUrl }) => {
  if (bot) {
    // Already loaded
    return
  }

  bot = new Telegraf(token, { webhookReply: true })
  bot.telegram.setWebhook(webhookUrl)

  bot.hears('Hello Chunky', (ctx) => hello(ctx))
  bot.command('/verifyme', (ctx) => verify(ctx))
}

const executor = ({ event, chunk, config }) => {
  setup(config.settings.telegram.chunkyBot)

  return bot.handleUpdate(event.body)
}

module.exports.main = chunky.handler({ executor, filename, auth })
