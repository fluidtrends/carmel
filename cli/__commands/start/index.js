const Carmel = require('@carmel/sdk')

class _ extends Carmel.Commands.Start {

  constructor(args) {
      super(args)
    }

    exec(session) {
      return super.exec(session)
   }
}

module.exports = _
