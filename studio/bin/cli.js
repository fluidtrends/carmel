;(async () => {
  const path = require('path')

  const commandArgs = [].concat(process.argv).slice(2)
  const carmelSDKVersion = '1.9.42'

  const commandId = commandArgs[0].toLowerCase()
  const command = {
    id: commandId,
    cls: commandId[0].toUpperCase() + commandId.substring(1),
  }

  const userHome =
    process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']
  const carmelHome = path.resolve(userHome, '.carmel')
  const carmelSDKHome = path.resolve(
    carmelHome,
    'cache',
    '@carmel',
    'sdk',
    carmelSDKVersion,
    '@carmel',
    'sdk'
  )

  const Carmel = require(path.resolve(carmelSDKHome, 'lib'))
  const Command = Carmel.Commands[command.cls]
  const cmd = new Command(command)

  const args = commandArgs
    .map((name) => {
      const parts = name.split('=')
      if (parts.length === 1) return undefined

      return {
        name: parts[0].substring(2),
        value: parts[1],
      }
    })
    .filter((arg) => arg)

  const output = await Carmel.Engine.run(cmd, args)
  console.log(output)
})()
