const Command = require('../../Command')

class _ extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID }
  get requiresContext() { return _.REQUIRES_CONTEXT }
  get title() { return _.TITLE }

  vault(session) {
    return session.index.sections[this.args.secure ? 'store' : 'main'].vault
  }

  lock(session) {
    const v = this.vault(session)

    if (v.isLocked) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the store is already locked')))
    }

    if (!this.args.password) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the password is missing')))
    }

    return v.lock(this.args.passsword)
  }

  unlock(session) {
    const v = this.vault(session)

    if (!v.isLocked) {
        return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the store is already unlocked')))
      }
  
      if (!this.args.password) {
        return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the password is missing')))
      }
  
      return v.unlock(this.args.passsword)
  }

  save(session) {
    return Promise.resolve()
  }

  read(session) {
    return Promise.resolve()
  }

  defaults(session) {
    return Promise.resolve()
  }


  exec(session) {
    if (!session) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')))
    }

    if (!this.operation) {
      return this.defaults(session)
    }

    if (!this[this.operation]) {
      return this.defaults(session)
    }

    return this[this.operation](session)
  }
}

_.ERRORS = Object.assign({}, _.ERRORS, {})
_.REQUIRES_CONTEXT = false
_.TITLE = "Locking the vault"
_.ID = 'lock'

module.exports = _




// const Command = require('../../Command')

// class _ extends Command {
//   constructor(args) {
//     super(args)
//   }

//   get id() { return _.ID }
//   get requiresContext() { return _.REQUIRES_CONTEXT }
//   get title() { return _.TITLE }

//   exec(session) {
//     if (!session) {
//       return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')))
//     }

//     if (!session.index.sections.store.vault.isLocked) {
//       return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the store is already unlocked')))
//     }

//     if (!this.args.password) {
//       return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the password is missing')))
//     }

//     return session.index.sections.store.vault.unlock(this.args.password)
//   }
// }

// _.ERRORS = Object.assign({}, _.ERRORS, {})
// _.REQUIRES_CONTEXT = false
// _.TITLE = "Unlocking"
// _.ID = 'unlock'

// module.exports = _