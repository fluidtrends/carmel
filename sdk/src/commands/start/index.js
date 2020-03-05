const Command = require('../../Command')
const path = require('path')
const fs = require('fs-extra')
const pm2 = require('pm2')
const uuid = require('uuid')

class _ extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID }
  get title() { return _.TITLE }

  loadDefaultStarterScript(session) {
      
  }

  loadCustomStarterScript(session) {
    return new Promise((resolve, reject) => {
      try {
        // Let's find the starter script as specified by the context
        const starter = require(path.resolve(this.context.script))
        resolve(starter)
      } catch (e) {
        reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the starter script could not be loaded')))
      }
    })
  }

  loadStarterScript(session) {
    return (this.context.script == _.DEFAULT_START_SCRIPT) ? this.loadDefaultStarterScript(session) : this.loadCustomStarterScript(session)
  }

  exec(session) {
    return super.initialize(session)
                .then(() => this.loadStarterScript(session))
  }
}

_.TITLE = "Starting up"
_.ID = 'start'
_.DEFAULT_START_SCRIPT = 'default'

module.exports = _