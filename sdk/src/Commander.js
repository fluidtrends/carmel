export class Commander {
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

    run() {
        return this.command.exec(this.session)
    }

    verify() {
        return new Promise((resolve, reject) => {
            const missing = this.command.missingRequiredArgs

            if (missing && missing.length > 0) {
                // Make sure that the command has been given what it expects
                reject(new Error(_.ERRORS.MISSING_ARG(missing[0])))
                return
            }
            resolve()    
        })
    }

    static run (command, session) {
        const _this = new _(command, session)
        return _this.verify()
                    .then(() => _this.session.initialize())
                    .then(() => _this.run())
    }
}

_.ERRORS = {
    MISSING_ARG: (arg) => `Missing [${arg}] argument`
}