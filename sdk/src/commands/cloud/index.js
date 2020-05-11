const Command = require('../../Command')

export class CloudCommand extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID }
  get requiresContext() { return _.REQUIRES_CONTEXT }
  get title() { return _.TITLE }

  status(session) {
    session.logger.info("Checking the status of your cloud ...")

    return this.prepareCloud(session)
               .then(() => this.cloud.status())
  }

  init(session) {
    session.logger.info("Setting up your cloud ...")

    return this.prepareCloud(session)
               .then(() => this.cloud.init())
  }

  push(session) {
    session.logger.info("Deploying cloud changes ...")

    return this.prepareCloud(session)
               .then(() => this.cloud.push())
  }

  exec(session) {
    if (!session) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')))
    }

    if (!this.args.operation) {
      return this.status(session)
    }

    if (!this[this.args.operation]) {
      return this.status(session)
    }

    return this[this.args.operation](session)
  }
}

_.ERRORS = Object.assign({}, _.ERRORS, {})
_.REQUIRES_CONTEXT = false
_.TITLE = "Managing cloud"
_.ID = 'cloud'
