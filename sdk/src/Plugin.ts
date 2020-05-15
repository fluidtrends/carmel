import {
    Session,
    Commander,
    IPlugin,
    Errors,
    ISession, 
    Id,
    ICommand 
} from '.';

export class Plugin implements IPlugin {

    protected _props: any;
    protected _session?: ISession;
    protected _command?: ICommand;
    protected _name: string;

    constructor(props: any) {
        this._props = Object.assign({}, props)
        this._name = props.name || "carmel"
        this._props.session = Object.assign({}, { name: this.name }, props.session)
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

    get name() {
        return this._name
    }

    findCommand(id: Id) {
        return require(`./commands/${id}`).default
    }

    loadCommand() {
        if (!this.props || !this.props.command) {
            return Promise.reject(Errors.PluginCannotLoad(this.name, 'the command is missing'))
        }

        return new Promise((resolve, reject) => {
            try {
                const Cmd = this.findCommand(this.props.command.id)
                this._command = new Cmd(this.props.command.args, this.props.command.subid)
                resolve(this.command)
            } catch (e) {
                reject(e)
            }
        })
    }

    createSession() {
        this._session = new Session(this.props.session)//, this.command)
        return this.session?.open()
    }

    async run() {
        return this.loadCommand()
                .then(() => this.createSession())
                .then(() => Commander.run(this.command, this.session))
                .then(() => this.session?.close())
        
    }
}