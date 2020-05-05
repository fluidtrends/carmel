const Carmel = require('@carmel/sdk')
const Script = require('../../Script')
const run = require('../../run')

class _ extends Carmel.Commands.Preview {

  constructor(args) {
      super(args)
      this._script = new Script(Object.assign({}, args, { dev: false }))
    }

    get script() {
      return this._script
    }

    get target() {
      return this.script.target
    }

    exec(session) {
      return Promise.all([super.exec(session), this.script.load(session)])
                    .then(([script, props]) => {
                      process.stdout.write = Function.prototype
                      process.stderr.write = Function.prototype
                      return script.exec(Object.assign({}, script.props, props))
                    })
   }
}

module.exports = _
