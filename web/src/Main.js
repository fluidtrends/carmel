class _ { 
    constructor(props) {
        this._props = Object.assign({}, props)
    }

    get props() {
        return this._props
    }
}

module.exports = _