const path = require('path')
const fs = require('fs-extra')

class _ {
    constructor(args) {
        this._args = Object.assign({}, args)
    }

    // TO BE IMPLEMENTED BY CHILDREN
    get requiredArgs() { return [] }
    get title() { return _.TITLE }
    get id() { return _.ID }
    get requiresContext() { return _.REQUIRES_CONTEXT }

    exec(session) { return this.initialize(session) }

    initialize(session) {
        this._session = session

        if (!this.session) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')))
        }
    
        if (!this.session.workspace.exists) {
            return Promise.reject(new Error(_.ERRORS.DOES_NOT_EXIST('workspace')))
        }
      
        // Look up the workspace context, if any
        this._context = this.session.workspace.context(this.id)
    
        if (!this.context && this.requiresContext) {
            // We need a start context in the workspace
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the workspace context is missing')))
        }
      
        return Promise.resolve()
    }

    get target () { 
        this._target 
    }

    get context() {
        return this.target ? this._context[this.target] : this._context
    }

    get session() {
        return this._session
    }

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
}

_.ERRORS = {
    DOES_NOT_EXIST: (name) => name ? `The ${name} does not exist` : `Does not exist`,
    ALREADY_EXISTS: (name) => name ? `The ${name} already exists` : `Already exists`,
    COULD_NOT_EXECUTE: (reason) => reason ? `Could not execute command because ${reason}`: `Could not execute command`
}

_.TITLE = 'command'
_.ID = '_'
_.REQUIRES_CONTEXT = true 
_.TARGETS = { WEB: "web", DESKTOP: "desktop", MOBILE: "mobile", CLOUD: "cloud" }

module.exports = _
