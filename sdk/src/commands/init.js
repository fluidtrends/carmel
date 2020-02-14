const Command = require('../Command')
 
class _ extends Command {
  constructor(args) {
    super(args)
  }

  get requiredArgs() { return REQUIRED }
  get title() { return TITLE }

  initialize() {

    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  exec() {
    if (this.hasFile("chunky.json")) {
      return Promise.reject(new Error(_.ERRORS.ALREADY_EXISTS('product')))
    }

    return Promise.resolve()
 }
}

const REQUIRED = ['name', 'template', 'bundle']

_.ERRORS = Object.assign({}, _.ERRORS, {

})

const TITLE = "Creating a new workspace"

module.exports = _