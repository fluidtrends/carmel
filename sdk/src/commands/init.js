const Command = require('../Command')

class _ extends Command {
  constructor(args) {
    super(args)
  }

  get requiredArgs() { return _.REQUIRED }
  get title() { return _.TITLE }
  get manifestFilename() { return _.MANIFEST_FILENAME }
  get type () { return _.TYPE }

  initialize() {

    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  exec() {
    if (this.hasFile(this.manifestFilename)) {
      return Promise.reject(new Error(_.ERRORS.ALREADY_EXISTS(this.type)))
    }

    return Promise.resolve()
 }
}

_.ERRORS = Object.assign({}, _.ERRORS, {})
_.MANIFEST_FILENAME = ".carmel.json"
_.REQUIRED = ['name', 'template', 'bundle']
_.TITLE = "Creating a new workspace"
_.TYPE = "workspace"

module.exports = _