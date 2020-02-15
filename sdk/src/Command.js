const path = require('path')
const fs = require('fs-extra')

class _ {
    constructor(args) {
        this._args = Object.assign({}, args)
    }

    // TO BE IMPLEMENTED BY CHILDREN
    get requiredArgs() { return [] }
    get title() { return "command" }
    exec() { return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE())) }

    get args() {
        return this._args
    }

    get cwd() {
        return process.cwd()
    }

    get missingRequiredArgs() {
        return this.requiredArgs.filter(arg => {
            return (!this.args || !this.args[arg])
        })
    }

    hasFile (filepath) {
        return fs.existsSync(path.resolve(this.cwd, filepath))
    }
}

_.ERRORS = {
    ALREADY_EXISTS: (name) => name ? `The ${name} already exists` : `Already exists`,
    COULD_NOT_EXECUTE: (reason) => reason ? `Could not execute command because ${reason}`: `Could not execute command`
}

module.exports = _
