const { exec, productExists, clientError, clientData } = require('../common')

module.exports = (mainWindow, args) => {
  const id = args.command.id
  const template = args.command.template

  if (productExists(id)) {
    clientError(mainWindow, args.callId, 'This product already exists')
    return
  }

  const command = `mkdir ~/products/${id} && rsync -av --progress ~/templates/${template}/ ~/products/${id}/ --exclude .git`
  exec({ mainWindow, cmd: 'vagrant', args: ['ssh', '-c', command], client: args.callId })
}
