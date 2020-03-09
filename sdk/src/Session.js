const { Index } = require('dodi')
const Workspace = require('./Workspace')

class _ {
    constructor(props) {
        this._props = Object.assign({}, props)
        this._workspace = new Workspace(this.props)
        this._index = new Index(Object.assign({}, { sections: _.DEFAULT_SECTIONS }, this.props))
    }

    get props() {
        return this._props
    }

    get index() {
        return this._index
    }

    get workspace() {
        return this._workspace
    }

    set(key, val) {
       return this.index.sections.main.vault.write(key, value)
    }

    get(key) {
       return this.index.sections.main.vault.read(key)
    }

    downloadCommonDeps() {
        return this.index.installArchive({ id: "papanache" })
                         .then((archive) => {
                             archive.installDependencies()
                             this.set("papanacheVersion", archive.version)
                         })
    }
    
    initialize () {
        // Initialize the index first of all
        return this.index.initialize()

                // Make sure the local common deps are available
                .then(() => this.downloadCommonDeps())

                // Then let's make sure the workspace is also initialized
                .then(() => this.workspace.initialize())
    }
}

_.DEFAULT_SECTIONS = [ { id: "main" }, { id: "events" }, { id: "archives" }]

module.exports = _