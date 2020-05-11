// const path = require('path')
// const fs = require('fs-extra')
// const { Cloud } = require("awsome")

import {
    ICommand,
    CommandProps
} from '.'

export class Command implements ICommand {
    protected readonly _props: CommandProps;

    constructor(props: CommandProps) {
        this._props = props
    }

    get props() {
        return this._props
    }

    // TO BE IMPLEMENTED BY CHILDREN
//     get requiredArgs() { return [] }
//     get title() { return _.TITLE }
//     get id() { return _.ID }
//     get requiresContext() { return _.REQUIRES_CONTEXT }
//     get requiresFreshSession() { return _.REQUIRES_FRESH_SESSION }
//     get cloud () { return this._cloud }
//     get env () { return this.args.env || "dev" }
    
//     exec(session) { return this.initialize(session) }

//     loadScript(paths = [this.context.script]) {   
//         return new Promise((resolve, reject) => {
//           try {
//             // Let's find the script as specified by the context
//             const starter = require(path.resolve(...paths))
//             resolve({ exec: starter, props: { name: "app" }})
//           } catch (e) {
//             reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the script could not be loaded')))
//           }
//         })
//     }

//     findDefaultArchive(session) {
//         const version = session.get("papanacheVersion")
//         return session.index.sections.archives.findArchive({ id: "papanache", version })
//     }
    
//     loadDefaultScript(session, type) {
//         return this.findDefaultArchive(session)
//                    .then((archive) => this.loadScript([archive.path, 'src', this.target, 'commands', `${type}.js`]))
//     }

//     commandScript(session, type) {
//         return (this.context.script === _.DEFAULT_SCRIPT) ? this.loadDefaultScript(session, type) : this.loadScript()
//     }

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

//     initialize(session) {
//         this._session = session

//         if (!this.session) {
//             return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')))
//         }
    
//         if (!this.session.workspace.exists) {
//             return Promise.reject(new Error(_.ERRORS.DOES_NOT_EXIST('workspace')))
//         }
      
//         // Look up the workspace context, if any
//         this._context = this.session.workspace.context(this.id)
    
//         if (!this.context && this.requiresContext) {
//             // We need a start context in the workspace
//             return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the workspace context is missing')))
//         }
      
//         return Promise.resolve()
//     }

//     get target () { 
//         this._target 
//     }

//     get context() {
//         return this.target ? this._context[this.target] : this._context
//     }

//     get session() {
//         return this._session
//     }

//     get args() {
//         return this._args
//     }

//     get cwd() {
//         return process.cwd()
//     }

//     get missingRequiredArgs() {
//         return this.requiredArgs.filter(arg => {
//             return (!this.args || !this.args[arg])
//         })
//     }
}

// _.ERRORS = {
//     DOES_NOT_EXIST: (name) => name ? `The ${name} does not exist` : `Does not exist`,
//     ALREADY_EXISTS: (name) => name ? `The ${name} already exists` : `Already exists`,
//     COULD_NOT_EXECUTE: (reason) => reason ? `${reason}`: `Could not execute command`
// }

// _.TITLE = 'command'
// _.ID = '_'
// _.REQUIRES_CONTEXT = true 
// _.REQUIRES_FRESH_SESSION = false
// _.TARGETS = { WEB: "web", DESKTOP: "desktop", MOBILE: "mobile", CLOUD: "cloud" }
// _.DEFAULT_SCRIPT = 'default'
