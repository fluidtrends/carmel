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

  loadStarterScript(session) {
    return new Promise((resolve, reject) => {
      try {
        // Let's find the starter script as specified by the context
        const starter = require(path.resolve(this.context.script))
        resolve(starter)
      } catch (e) {
        console.log(e)
        
        reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the starter script could not be loaded')))
      }
    })
  }

  exec(session) {
    return super.initialize(session)
                .then(() => this.loadStarterScript(session))
  }
}

_.TITLE = "Starting up"
_.ID = 'start'

module.exports = _