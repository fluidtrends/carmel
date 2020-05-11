const path = require('path')
const Command = require('../../Command')

export class PreviewCommand extends Command {
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

_.TITLE = "Previewing"
_.ID = 'preview'