const path = require('path')
const Command = require('../../Command')
const Script = require('../../Script')
const run = require('../../run')

export class StartCommand extends Command {
  constructor(args) {
    super(args)
    this._script = new Script(Object.assign({}, args, { dev: true }))
  }

  get id() { return _.ID } 
  get title() { return _.TITLE }
  get requiresFreshSession() { return true }

  get script() {
    return this._script
  }

  get target() {
    return this.script.target
  }

  exec(session) {
    return super.initialize(session)
                .then(() => Promise.all([this.commandScript(session, _.ID), this.script.load(session)]))
                .then(([script, props]) => run({ session, script, props }))
  }
}

_.TITLE = "Starting up"
_.ID = 'start'
