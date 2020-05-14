import {
    ICommander,
    ICommand,
    ISession,
    Errors
} from '.'

export class Commander implements ICommander {
    protected _command: ICommand;
    protected _session?: ISession;

    constructor (command: ICommand, session?: ISession) {
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
                reject(Errors.ArgumentIsMissing(missing[0]))
                return
            }
            resolve()    
        })
    }

    public static async run (command: ICommand, session?: ISession) {
        const _this = new Commander(command, session)
        return _this.verify()
                    .then(() => _this.session?.initialize())
                    .then(() => _this.run())
    }
}
