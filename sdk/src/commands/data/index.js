const Command = require('../../Command')

export class DataCommand extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID }
  get requiresContext() { return _.REQUIRES_CONTEXT }
  get title() { return _.TITLE }

  vault(session) {
    return session.index.sections[this.args.secure ? 'safe' : 'main'].vault
  }

  lock(session) {
    const v = session.index.sections.safe.vault

    if (v.isLocked) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is already locked')))
    }

    if (!this.args.password) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the password is missing')))
    }

    session.logger.info("Locking secure data ...")

    return v.lock(this.args.password)
  }

  unlock(session) {
    const v = session.index.sections.safe.vault

    if (!v.isLocked) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is already unlocked')))
    }

    if (!this.args.password) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the password is missing')))
    }

    session.logger.info("Unlocking secure data ...")

    return v.unlock(this.args.password)
  }

  save(session) {
    const { key, values } = this.args

    if (!key) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the key is missing')))
    }

    if (!values || values.length === 0) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the value missing')))
    }

    const v = this.vault(session)

    if (this.args.secure && v.isLocked) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is locked')))
    }

    session.logger.info("Saving data ...")
    
    v.write(key, values)

    return Promise.resolve()
  }

  read(session) {
    const { key } = this.args

    if (!key) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the key is missing')))
    }

    const v = this.vault(session)

    if (this.args.secure && v.isLocked) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is locked')))
    }

    session.logger.info("Reading data ...")
    const output = v.read(key)

    if (!output) {
      return Promise.reject(new Error('No data found'))
    }

    session.logger.done(JSON.stringify(output, null, 4))

    return Promise.resolve()
  }

  defaults(session) {
    session.logger.info("What do you want to do?")
    return Promise.resolve()
  }


  exec(session) {
    if (!session) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')))
    }

    if (!this.args.operation) {
      return this.defaults(session)
    }

    if (!this[this.args.operation]) {
      return this.defaults(session)
    }

    return this[this.args.operation](session)
  }
}

_.ERRORS = Object.assign({}, _.ERRORS, {})
_.REQUIRES_CONTEXT = false
_.TITLE = "Managing data"
_.ID = 'data'
