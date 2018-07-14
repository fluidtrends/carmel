const { exec, productExists, clientError, clientData } = require('../common')

module.exports = (mainWindow, args) => {
  const id = args.command.id
  const name = args.command.name
  const template = args.command.template

  if (productExists(id)) {
    clientError(mainWindow, args.callId, 'This product already exists')
    return
  }

  exec({ mainWindow, cmd: 'vagrant', args: ['ssh', '-c', `~/bin/create.sh ${id} \"${name}\" ${template}`], client: args.callId })
}
