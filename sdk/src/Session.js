const { Index } = require('dodi')
const Workspace = require('./Workspace')
const Logger = require('./Logger')

export class Session {
    constructor(props, command) {
        this._props = Object.assign({}, props)
        this._command = command
        this._logger = new Logger(this.props)
        this._workspace = this.props.noWorkspace ? null : new Workspace(this.props, this)
        this._index = new Index(Object.assign({}, { sections: _.DEFAULT_SECTIONS }, this.props, { name: 'carmel' }), this.logger)
    }

    get props() {
        return this._props
    }

    get logger() {
        return this._logger
    }

    get index() {
        return this._index
    }

    get workspace() {
        return this._workspace
    }

    get hasWorkspace() {
        return !this.props.noWorkspace
    }

    get command() {
        return this._command
    }

    set(key, val) {
       return this.index.sections.main.vault.write(key, val)
    }

    get(key) {
       return this.index.sections.main.vault.read(key)
    }

    updateIndex() {
        this.logger.info('Making sure your development environment is up to date ...')
 
        return this.index.installArchive({ id: "papanache", silent: true })
                         .then((archive) => {
                            this.set("papanacheVersion", archive.version)
                            return archive.installDependencies()
                         })
                         .then(() => this.index.installArchive({ id: "@fluidtrends/bananas", silent: true }))
                         .then((archive) => {
                            this.set("bananasVersion", archive.version)
                            return archive.installDependencies()
                         })
                         .then(() => {
                            this.logger.info('Your development environment is all up to date')
                         })
    }

    open() {
        // Let's setup the logger
        return this.logger.start(this.command && this.command.title)
    }
    
    initialize () {
        // Initialize the index first of all
        return  this.index.initialize()

                // Make sure the local common deps are available
                .then(() => this.command && this.command.requiresFreshSession && this.updateIndex())

                // Then let's make sure the workspace is also initialized
                .then(() => this.hasWorkspace && this.workspace.initialize())
    }

    close() {
        // Close this session
        return this.logger.stop()
    }
}

_.DEFAULT_SECTIONS = [
    { id: "main" }, 
    { id: "safe", secure: true },
    { id: "archives" },
    { id: "events" }, 
    { id: "cloud" },
    { id: "products" }
]