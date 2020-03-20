const path = require('path')
const Command = require('../../Command')

class _ extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID } 
  get title() { return _.TITLE }

  exec(session) {
    return super.initialize(session)
                .then(() => this.startScript(session, _.ID))
  }
}

_.TITLE = "Building"
_.ID = 'make'

module.exports = _