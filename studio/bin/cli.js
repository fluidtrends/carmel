;(async () => {
  const send = (message) => {
    process.send && process.send(message)
  }

  const path = require('path')

  const { init, installCarmelSDK, runCarmelCommand } = require('@carmel/cli')

  send({ status: 'Initializing engine ...' })

  try {
    init()

    const commandArgs = [].concat(process.argv).slice(2)
    const commandId = commandArgs[0].toLowerCase()
    const command = {
      id: commandId,
      cls: commandId[0].toUpperCase() + commandId.substring(1),
    }

    console.log(command)

    const sdkPath = await installCarmelSDK()

    console.log(sdkPath)

    const tsMode = process.env.CARMEL_MODE && process.env.CARMEL_MODE === 'ts'
    const Carmel = require(path.resolve(sdkPath, tsMode ? 'src' : 'lib'))
    const Command = Carmel.Commands[command.cls]
    const cmd = new Command(command)

    send({ status: 'Found command ...' })

    const args = Object.keys(command).map((name) => ({
      name,
      value: command[name],
    }))

    send({ status: 'Running command ...' })

    const output = await Carmel.Engine.run(cmd, args)
    send({ status: 'Done.', done: true, output })
    console.log('DONE!', output)
    // process.exit(0)
  } catch (e) {
    console.log(e)
    send({ status: 'Done.', done: true, error: e.message })
    // process.exit(1)
  }
})()
