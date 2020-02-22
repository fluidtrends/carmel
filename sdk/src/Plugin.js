const Session = require('./Session')
const Commander = require('./Commander')

class _ {
    constructor(props) {
        this._props = Object.assign({}, props)
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

    loadCommand() {
        if (!this.props || !this.props.command) {
            return Promise.reject(new Error(_.ERRORS.CANNOT_LOAD('the command is missing')))
        }

        return new Promise((resolve, reject) => {
            try {
                const Command = require(`./commands/${this.props.command.id}`)
                this._command = new Command(this.props.command.args)
                resolve(this.command)
            } catch (e) {
                reject(e)
            }
        })
    }

    load() {
        if (!this.props || !this.props.session || !this.props.session.id) {
            return Promise.reject(new Error(_.ERRORS.CANNOT_LOAD('the session is missing')))
        }

        this._session = new Session({ name: this.props.session.id })
        return this.loadCommand().then(() => this.session.initialize())
    }
 
    run() {
        return this.load()
                    .then(() => Commander.run(this.command, this.session))
    }

}

_.ERRORS = {
    CANNOT_LOAD: (reason) => reason ? `Cannot load plugin because ${reason}` : `Cannot load plugin`
}

module.exports = _
