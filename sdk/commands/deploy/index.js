const Carmel = require('@carmel/sdk')
const coreutils = require('coreutils')

class _ extends Carmel.Commands.Deploy {
    constructor(args) {
      super(args)
    }

    exec(session) {      
      return super.exec(session)
                  .then(() => {
                    session.logger.done(`Congrats! Your app is now published :)`)
                  })
   }
  }
  
  _.ERRORS = Object.assign({}, _.ERRORS, {})

  module.exports = _