const Session = require('./Session')
const Commander = require('./Commander')

export class Plugin {
    constructor(props) {
        this._props = Object.assign({}, props)
        this._props.session = Object.assign({}, { name: "carmel" }, props.session)
    }

    get props() {
        return this._props
    }

    get session() {
        return this._session
    }

    get command() {
        return this._command
    }

    findCommand(id) {
        return require(`./commands/${id}`)
    }

    loadCommand() {
        if (!this.props || !this.props.command) {
            return Promise.reject(new Error(_.ERRORS.CANNOT_LOAD('the command is missing')))
        }

        return new Promise((resolve, reject) => {
            try {
                const Command = this.findCommand(this.props.command.id)
                this._command = new Command(this.props.command.args, this.props.command.subid)
                resolve(this.command)
            } catch (e) {
                reject(e)
            }
        })
    }

    createSession() {
        this._session = new Session(this.props.session, this.command)
        return this.session.open(this.command)
    }

    run() {
        return new Promise((resolve) => {
         this.loadCommand()
                .then(() => this.createSession())
                .then(() => Commander.run(this.command, this.session))
                .then(() => this.session.close())
                .catch((e) => {
                    console.log(e)
                    this.session.logger.error(e)
                    resolve()
                })   
        })
        
    }
}

_.ERRORS = {
    CANNOT_LOAD: (reason) => reason ? `Cannot load plugin because ${reason}` : `Cannot load plugin`
}
