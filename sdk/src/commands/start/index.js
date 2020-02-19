const Command = require('../../Command')
const path = require('path')
const fs = require('fs-extra')

class _ extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID }
  get title() { return _.TITLE }
  get execArgs() { return this.args.exec}

  loadStarterScript() {
    return new Promise((resolve, reject) => {
      try {
        // Let's find the starter script as specified by the context
        const starter = require(path.resolve(process.cwd(), this.context.script))
        resolve(starter)
      } catch (e) {
        reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the starter script could not be loaded')))
      }
    })
  }

  exec(session) {
    return super.initialize(session)
                .then(() => this.loadStarterScript())
                .then((starter) => starter(Object.assign({}, { dir: process.cwd() }, this.execArgs)))
  }
}

_.TITLE = "Starting up"
_.ID = 'start'

module.exports = _