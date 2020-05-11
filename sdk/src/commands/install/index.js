const Command = require('../../Command')

export class InstallCommand extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID }
  get title() { return _.TITLE }

  downloadDeps(installerType) {
    try {
      const installer = require(`./${this.context.type}`)
      return installer(this.args)
    } catch (e) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the dependencies could not be installed')))
    }
  }

  exec(session) {
    return super.initialize(session)
                .then(() => this.downloadDeps('npm'))
  }
}

_.ERRORS = Object.assign({}, _.ERRORS, {})
_.TITLE = "Installing dependencies"
_.ID = 'install'