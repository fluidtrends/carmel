const fs = require('fs-extra')
const path = require('path')

class _ {
    constructor(props) {
        this._props = Object.assign({}, props)
        this._dir = this.props.cwd || process.cwd()
    }

    get props() {
        return this._props
    }

    get dir() {
        return this._dir
    }

    get exists() {
        return fs.existsSync(path.resolve(this.dir, _.MANIFEST_FILENAME))  
    }

    initialize () {
        if (!this.exists) {
            const manifest = JSON.stringify(_.DEFAULT_MANIFEST(), null, 2)
            fs.existsSync(this.dir) || fs.mkdirsSync(this.dir)
            fs.writeFileSync(path.resolve(this.dir, _.MANIFEST_FILENAME), manifest, 'utf8')
        }

        // Let's just initialize this workspace before anything else
        return Promise.resolve()
    }
}

_.MANIFEST_FILENAME = ".carmel.json"
_.DEFAULT_MANIFEST = () => ({
    type: "carmel",
    description: "This is a Carmel Workspace"
})
module.exports = _