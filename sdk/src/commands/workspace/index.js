const Command = require('../../Command')

export class WorkspaceCommand extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID }
  get requiresContext() { return _.REQUIRES_CONTEXT }
  get title() { return _.TITLE }

  set(session) {
    const { key, values } = this.args

    if (!key) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the key is missing')))
    }

    if (!values || values.length === 0 || Object.keys(values).length === 0) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the value is missing')))
    }

    session.logger.info("Updating workspace ...")
    session.workspace.reload()

    const ks = key.split('.')
    var el = {}
    var tmp = el

    var i = 0
    ks.map(k => {
      tmp[k] = ++i < ks.length ? {} : values
      tmp = tmp[k]
    })

    session.workspace.saveData(el)

    return Promise.resolve()
  }

  get(session) {
    const { key } = this.args

    if (!key) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the key is missing')))
    }
  
    session.logger.info("Reading workspace settings ...")

    session.workspace.reload()
    const data = session.workspace.data

    if (!data) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('Nothing available')))
    }

    const ks = key.split('.')
    var el = Object.assign({}, data)

    var i = 0
    var found = true
    ks.map(k => {
      if (!found) {
        return 
      }

      el = el[ks[i++]]
      if (!el) {
        found = false
        return 
      }
    })

    if (!found) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('Not found in the workspace')))
    }

    session.logger.done(JSON.stringify(el, null, 4))

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
_.TITLE = "Managing workspace"
_.ID = 'workspace'