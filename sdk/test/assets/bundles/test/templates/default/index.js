class _ {
    constructor(props) {
        this._props = Object.assign({}, props)
    }

    get props() {
        return this._props
    }

    get archiveFiles() {
        return [
            "assets/text/**/*", 
            "assets/hello.png"
        ]
    }

    get files() {
        return [
            "test.json"
        ]
    }
}

module.exports = _