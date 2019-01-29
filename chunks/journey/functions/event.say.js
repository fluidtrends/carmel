// const { Wit, log } = require('node-wit')

const emotions = require('./chunky.emotions')

const emotion = (type) => {
  if (!emotions || !emotions[type]) {
    return ``
  }

  return emotions[type][Math.floor(Math.random() * Math.floor(emotions[type].length - 1))]
}

const message = (registered, args) => {
  if (!registered) {
     return [`Hey, good stuff, this machine is now registered.`, emotion('happy')]
  }

  return [`Hello right back at ya :) This machine is already registered.`, emotion('happy')]
}

module.exports = ({ args, journey, timestamp, config }) => {
  // const wit = new Wit({
  //   accessToken: config.settings.wit.accessToken,
  //   logger: new log.Logger(log.DEBUG)
  // })

  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  update.machines = update.machines || {}
  response.message = message(update.machines[args.machineId], args)
  update.machines[args.machineId] = Object.assign({}, args, { timestamp })

  return { update, response }
}
