const { Index } = require('dodi')

class _ {
    constructor(props) {
        this._props = Object.assign({}, props)
        this._index = new Index(this.props)
    }

    get props() {
        return this._props
    }

    get index() {
        return this._index
    }

    initialize () {
        // Initialize the index first of all
        return this.index.initialize()
    }
}

module.exports = _