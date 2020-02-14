class _ {
    constructor (command) {
        this._command = command
    }

    get command() {
        return this._command
    }

    exec() {
        const missing = this.command.missingRequiredArgs
        if (missing && missing.length > 0) {
            // Make sure that the command has been given what it expects
            return Promise.reject(new Error(_.ERRORS.MISSING_ARG(missing[0])))
        }

        return this.command.initialize().then(() => this.command.exec())

    }

    static run (command) {
        const _this = new _(command)
        return _this.exec()
    }
}

_.ERRORS = {
    MISSING_ARG: (arg) => `Missing [${arg}] argument`
}

module.exports = _
