import { Engine, Commands } from '..'

;(async () => {
  const args = JSON.parse(process.env.CARMEL_COMMAND!)

  const Command = (Commands as any)[args.cls!]
  const command = new Command(args)

  try {
    await Engine.start(command, args)
  } catch (e) {
    console.log(e)
  }
})()
