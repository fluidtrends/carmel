const Command = require('../Command')

class _ extends Command {
  constructor(args) {
    super(args)
  }

  get requiredArgs() { return _.REQUIRED }
  get title() { return _.TITLE }
  get type () { return _.TYPE }

  exec(session) {
    if (!session) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')))
    }

    if (session.workspace.exists) {
      return Promise.reject(new Error(_.ERRORS.ALREADY_EXISTS(this.type)))
    }

    // Initialize the workspace
    return session.workspace.create()
 }
}

_.ERRORS = Object.assign({}, _.ERRORS, {})
_.REQUIRED = ['name', 'template', 'bundle']
_.TITLE = "Creating a new workspace"
_.TYPE = "workspace"

module.exports = _