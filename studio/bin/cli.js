;(async () => {
  const command = { id: 'start', cls: 'Start' }
  process.chdir(path.resolve('/Users/idancali/idancali/dev/carmel'))

  const path = require('path')

  //   console.log(process.argv)

  const { init, installCarmelSDK, runCarmelCommand } = require('@carmel/cli')

  try {
    init()

    const sdkPath = await installCarmelSDK()
    const tsMode = process.env.CARMEL_MODE && process.env.CARMEL_MODE === 'ts'
    const Carmel = require(path.resolve(sdkPath, tsMode ? 'src' : 'lib'))
    const Command = Carmel.Commands[command.cls]
    const cmd = new Command(command)
    const args = Object.keys(command).map((name) => ({
      name,
      value: command[name],
    }))

    const output = await Carmel.Engine.run(cmd, args)
    console.log(output)
  } catch (e) {
    console.log(e)
  }
})()
