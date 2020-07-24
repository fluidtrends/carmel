;(async () => {
  const path = require('path')

  const commandArgs = [].concat(process.argv).slice(2)
  const carmelSDKHome = process.env.CARMEL_SDK_HOME

  const commandId = commandArgs[0].toLowerCase()
  const command = {
    id: commandId,
    cls: commandId[0].toUpperCase() + commandId.substring(1),
  }

  const Carmel = require(path.resolve(carmelSDKHome, 'lib'))
  const Command = Carmel.Commands[command.cls]
  const cmd = new Command(command)

  const args = JSON.parse(commandArgs[1])

  const output = await Carmel.Engine.run(cmd, args)
  console.log(output)
})()
