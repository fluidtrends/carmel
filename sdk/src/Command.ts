import {
    ICommand,
    Errors,
    Config,
    IScript,
    ISession
} from '.'
import path from 'path'

export class Command implements ICommand {
    protected readonly _args: any;
    protected _session?: ISession;
    protected _context?: any;
    protected _props?: any;
    protected _script?: IScript;

    constructor(args: any) {
        this._args = args
        this._props = (Config.commands as any)[this.id] || {}
    }

    get id () {
        return this.constructor.name.toLowerCase()
    }

    get props() {
        return this._props
    }

    get script() {
        return this._script
    }
    
    get session() {
        return this._session
    }
    
    get args() {
        return this._args
    }

    get context() {
        return this._context
    }
    
    get env () { 
        return this.args.env || "dev" 
    }

    get cwd() {
        return process.cwd()
    }

//     get target () { 
//         this._target 
//     }

//     get context() {
//         return this.target ? this._context[this.target] : this._context
//     }

    get requiredArgs() { return (this.props.requiredArgs || []) as string[] }
    get title() { return this.props.title || 'command' }
    get requiresContext() { return this.props.requiresContext }
    get requiresFreshSession() { return this.props.requiresFreshSession }
    get type () { return this.props.type || 'workspace' }

//     get cloud () { return this._cloud }
    
    get missingRequiredArgs() {
        return this.requiredArgs.filter(arg => {
            return (!this.args || !this.args[arg])
        })
    }

    async exec(session?: ISession) { 
        return this.initialize(session) 
    }

    // loadScript(paths = [this.context.script]) {   
    //     return new Promise((resolve, reject) => {
    //       try {
    //         // Let's find the script as specified by the context
    //         const starter = require(path.resolve(...paths))
    //         resolve({ exec: starter, props: { name: "app" }})
    //       } catch (e) {
    //         reject(Errors.CommandCannotExecute(this.id, 'the script could not be loaded'))
    //       }
    //     })
    // }

    // findDefaultArchive() {
    //     // const version = session?.get("papanacheVersion")
    //     // return session.index.sections.archives.findArchive({ id: "papanache", version })
    // }
    
    // loadDefaultScript(type: string) {
    //     // return this.findDefaultArchive()
    //     //            .then((archive) => this.loadScript([archive.path, 'src', this.target, 'commands', `${type}.js`]))
    // }

    // commandScript(type: string) {
    //     // return (this.context.script === _.DEFAULT_SCRIPT) ? this.loadDefaultScript(session, type) : this.loadScript()
    // }

//     findCredentials(session) {
//         const profile = this.args.profile || 'default'
    
//         const v = session.index.sections.safe.vault
    
//         if (v.isLocked) {
//           return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is locked')))
//         }
    
//         session.logger.info(`Looking up AWS credentials [${profile}] ...`)
    
//         const credentials = Object.assign({}, { region: "us-east-1" }, v.read(`aws.${profile}`))

//         if (!credentials || !credentials.key || !credentials.secret) {
//           return Promise.reject(new Error('No credentials found'))
//         }
    
//         process.env.AWS_SDK_LOAD_CONFIG = null
//         process.env.AWS_ACCESS_KEY_ID = credentials.key
//         process.env.AWS_SECRET_ACCESS_KEY = credentials.secret
    
//         return Promise.resolve(credentials)
//     }

//     prepareCloud(session) {
//         return this.findCredentials(session).then((credentials) => {
//             this._cloud = new Cloud(Object.assign({}, credentials, { env: this.env }))
//             return this.cloud
//         })
//     }

    async initialize(session?: ISession) {
        this._session = session
        if (!this.session) {
            return Promise.reject(Errors.CommandCannotExecute(this.id, 'the session is missing'))
        }    

        if (!this.session.workspace!.exists) {
            return Promise.reject(Errors.CommandCannotExecute(this.id, 'the workspace is invalid'))
        }
      
        // // Look up the workspace context, if any
        // this._context = this.session.workspace!.context?[this.id]
    
        // if (!this.context && this.requiresContext) {
        //     // We need a start context in the workspace
        //     return Promise.reject(Errors.CommandCannotExecute(this.id, 'the workspace context is missing'))
        // }
      
        return Promise.resolve()
    }
}