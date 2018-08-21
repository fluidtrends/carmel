module.exports = () => (event, mainWindow, session, props) => {
  const name = props.command.title
  const template = props.command.template

  session.createProduct({ name, template, client: props.callId })
}
