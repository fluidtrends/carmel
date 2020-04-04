const Command = require('../../Command')
const amplify = require("awsome/src/amplify")

class _ extends Command {
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

    const env = this.args.env || "development"

    return this.findCredentials(session)
               .then(({ key, secret, region }) => amplify.init({ env, key, secret, region }))
  }
}

_.ERRORS = Object.assign({}, _.ERRORS, {})
_.REQUIRES_CONTEXT = false
_.TITLE = "Managing cloud"
_.ID = 'cloud'

module.exports = _