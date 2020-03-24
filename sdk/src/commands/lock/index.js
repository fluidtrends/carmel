const Command = require('../../Command')
const parse = require('url-parse')
const keytar = require('keytar')

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

    if (session.index.sections.store.vault.isLocked) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the store is already locked')))
    }

    return session.index.sections.store.vault.lock("test")
  }
}

_.ERRORS = Object.assign({}, _.ERRORS, {})
_.REQUIRES_CONTEXT = false
_.TITLE = "Locking"
_.ID = 'lock'

module.exports = _