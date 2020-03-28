const path = require('path')
const Command = require('../../Command')
const { Bucket } = require('awsome')

class _ extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID } 
  get title() { return _.TITLE }

  prepare(session) {
    // const bucket = new Bucket({
    //   name: ...,
    //   site: true,
    //   dir: ...
    // })

    // process.env.AWS_ACCESS_KEY_ID = ...
    // process.env.AWS_SECRET_ACCESS_KEY = ...
  }


  upload(session) {
    session.logger.info('Uploading...')

    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  exec(session) {
    return super.initialize(session)
                .then(() => this.prepare(session))
                .then(() => this.upload(session))
  }
}

_.TITLE = "Deploying"
_.ID = 'deploy'

module.exports = _