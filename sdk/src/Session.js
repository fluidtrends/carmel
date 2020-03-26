const { Index } = require('dodi')
const Workspace = require('./Workspace')
const Logger = require('./Logger')

class _ {
    constructor(props) {
        this._props = Object.assign({}, props)
        this._logger = new Logger(this.props)
        this._workspace = new Workspace(this.props, this)
        this._index = new Index(Object.assign({}, { sections: _.DEFAULT_SECTIONS }, this.props), this.logger)
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

    set(key, val) {
       return this.index.sections.main.vault.write(key, val)
    }

    get(key) {
       return this.index.sections.main.vault.read(key)
    }

    updateIndex(refresh) {
        if (!refresh) {
            return Promise.resolve()
        }

        this.logger.info('updating')
 
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
                            this.logger.info('all up to date')
                         })
    }
    
    initialize (command) {
        // Initialize the index first of all
        return this.index.initialize()

                // Make sure the local common deps are available
                .then(() => this.updateIndex(command && command.requiresFreshSession))

                // Then let's make sure the workspace is also initialized
                .then(() => this.workspace.initialize())
    }
}

_.DEFAULT_SECTIONS = [
    { id: "main" }, 
    { id: "events" }, 
    { id: "store" },
    { id: "products" },
    { id: "archives" }
]

module.exports = _