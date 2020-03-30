const fs = require('fs-extra')
const path = require('path')
const merge = require('deepmerge')

class _ {
    constructor(props, session) {
        this._session = session
        this._props = Object.assign({}, props)
        this._dir = this.props.cwd || process.cwd()
    }

    get props() {
        return this._props
    }

    get session() {
        return this._session
    }

    get logger() {
        return this.session.logger
    }

    get dir() {
        return this._dir
    }

    get exists() {
        return fs.existsSync(path.resolve(this.dir, _.MANIFEST_FILENAME))  
    }

    get data() {
        return this._data
    }

    context(id) {
        return this.data && this.data.context ? (id ? this.data.context[id] : this.data.context) : null
    }

    saveContext(data) {
        this._data.context = merge(Object.assign({}, this.data.context), data || {})
        const manifest = JSON.stringify(this.data, null, 2)
        fs.writeFileSync(path.resolve(this.dir, _.MANIFEST_FILENAME), `${manifest}\n`, 'utf8')
    }

    saveData(data) {
        this._data = merge(Object.assign({}, this.data), data || {})
        const manifest = JSON.stringify(this.data, null, 2)
        fs.writeFileSync(path.resolve(this.dir, _.MANIFEST_FILENAME), `${manifest}\n`, 'utf8')
    }

    reload() {
        if (!this.exists) {
            // Nothing to load yet
            return
        }

        // Load the data from the manifest
        this._data = JSON.parse(fs.readFileSync(path.resolve(this.dir, _.MANIFEST_FILENAME), 'utf8'))
    }

    initialize () {
        return new Promise((resolve, reject) => {
            this.reload()
            resolve()
        })
    }

    create() {
        return new Promise((resolve, reject) => {
            this._data = _.DEFAULT_MANIFEST()
            const manifest = JSON.stringify(this.data, null, 2)
            
            fs.existsSync(this.dir) || fs.mkdirsSync(this.dir)
            fs.writeFileSync(path.resolve(this.dir, _.MANIFEST_FILENAME), `${manifest}\n`, 'utf8')

            resolve()
        })
    }

    loadFile (filepath) {
      const file = path.resolve(this.dir, filepath)

      if (!fs.existsSync(file)) {
        // We can't continue without this file
        return Promise.reject(new Error(_.ERRORS.FILE_NOT_FOUND(filepath)))
      }
    
      return new Promise((resolve, reject) => {
          try {
            // Load the content
            const data = fs.readFileSync(file, 'utf8')

            resolve(path.extname(filepath).toLowerCase() === '.json' ? JSON.parse(data) : data)
          } catch(e) {
            reject(e)
          }
      })
    }

    findDirs(dirpath) {
        // This is where we want to look
        const dir = path.resolve(this.dir, dirpath)

        if (!fs.existsSync(dir)) {
          // We can't continue without the dir
          return Promise.reject(new Error(_.ERRORS.DIR_NOT_FOUND(dirpath)))
        }

        return new Promise((resolve, reject) => {
            // Let's see what we've got
            const dirs = fs.readdirSync(dir).filter(d => (d && path.extname(d).length === 0 && !_.IGNORE_DIRS.includes(d)))

            resolve(dirs)
        })
    }
}

_.ERRORS = {
    FILE_NOT_FOUND: (name) => name ? `The ${name} file is missing` : `The file is missing`,
    DIR_NOT_FOUND: (name) => name ? `The ${name} directory is missing` : `The directory is missing`
}

_.MANIFEST_FILENAME = ".carmel.json"

_.DEFAULT_MANIFEST = () => ({
    type: "carmel",
    description: "This is a Carmel Workspace",
    context: {}
})

_.IGNORE_DIRS = [".DS_Store"]

module.exports = _