const path = require('path')
const Command = require('../../Command')

class _ extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID } 
  get title() { return _.TITLE }

  upload(session) {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  exec(session) {
    return super.initialize(session)
                .then(() => this.upload(session))
  }
}

_.TITLE = "Deploying"
_.ID = 'deploy'

module.exports = _