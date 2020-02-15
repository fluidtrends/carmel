class _ {
    constructor (command, session) {
        this._command = command
        this._session = session
    }

    get command() {
        return this._command
    }

    get session() {
        return this._session
    }

    exec() {
        const missing = this.command.missingRequiredArgs
        if (missing && missing.length > 0) {
            // Make sure that the command has been given what it expects
            return Promise.reject(new Error(_.ERRORS.MISSING_ARG(missing[0])))
        }

        return this.command.exec(this.session)
    }

    static run (command, session) {
        const _this = new _(command, session)
        return _this.exec()
    }
}

_.ERRORS = {
    MISSING_ARG: (arg) => `Missing [${arg}] argument`
}

module.exports = _
