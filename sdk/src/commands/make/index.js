const path = require('path')
const Command = require('../../Command')

export class MakeCommand extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID } 
  get title() { return _.TITLE }
  get requiresFreshSession() { return true }

  exec(session) {
    return super.initialize(session)
                .then(() => this.startScript(session, _.ID))
  }
}

_.TITLE = "Building"
_.ID = 'make'
