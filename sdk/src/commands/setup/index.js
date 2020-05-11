const Command = require('../../Command')

export class SetupCommand extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID }
  get requiresContext() { return _.REQUIRES_CONTEXT }
  get title() { return _.TITLE }

  exec(session) {
    if (!session) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')))
    }

    return session.updateIndex()
  }
}

_.ERRORS = Object.assign({}, _.ERRORS, {})
_.REQUIRES_CONTEXT = false
_.TITLE = "Setting up your environment"
_.ID = 'setup'
