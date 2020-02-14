const { Index } = require('dodi')
const Workspace = require('./Workspace')

class _ {
    constructor(props) {
        this._props = Object.assign({}, props)
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

    initialize () {
        // Create a brand new index and workspace
        this._index = new Index(Object.assign({}, this.props, {
            sections: _.DEFAULT_SECTIONS
        }))

        this._workspace = new Workspace(this.props)

        // Initialize the index first of all
        return this.index.initialize()
            
                // Then let's make sure the workspace is also initialized
                .then(() => this.workspace.initialize())


    }
}

_.DEFAULT_SECTIONS = [{ id: "events" }, { id: "archives" }]

module.exports = _