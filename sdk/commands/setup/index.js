const Carmel = require('@carmel/sdk')

class _ extends Carmel.Commands.Setup {
    constructor(args) {
      super(args)
    }

    exec(session) {   
      return super.exec(session)
                  .then(() => { 
                    session.logger.done("Your development environment is ready to go")
                  })
   }

  }
  
  _.ERRORS = Object.assign({}, _.ERRORS, {})

  module.exports = _