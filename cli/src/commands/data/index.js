const Carmel = require('@carmel/sdk')

class _ extends Carmel.Commands.Data {
    constructor(args) {
      super(args)
    }

    parseValues() {
      if (!this.args.values) {
        return
      }
  
      var vals = {}
      this.args.values.map(val => {
        const valStats = val.split('=')
        if (!valStats || valStats.length !== 2) return
        vals[valStats[0]] = valStats[1]        
      })
  
      this._args.values = vals
    }

    exec(session) {      
      this.parseValues()

      return super.exec(session)
                  .then(() => {
                    session.logger.done(`Congrats!`)
                  })
                  .catch((e) => {
                    session.logger.error(e)
                  })
    }
  }
  
  _.ERRORS = Object.assign({}, _.ERRORS, {})

  module.exports = _