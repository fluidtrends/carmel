import fs from 'fs-extra'
import path from 'path'
import merge from 'deepmerge'

import { 
    IWorkspace, 
    WorkspaceProps, 
    Path, 
    IFile,
    File,
    Id,
    ISession 
} from '.'

export class Workspace implements IWorkspace {

    public static MANIFEST_FILENAME: Path = ".carmel.json"
    public static DEFAULT_MANIFEST = {
        type: "carmel",
        context: {}
    }

    protected _props: WorkspaceProps;
    protected _dir: Path;
    protected _manifest: IFile;
    protected _session: ISession;

    constructor(props: WorkspaceProps, session: ISession) {
        this._session = session
        this._props = props
        this._dir = this.props.cwd || process.cwd()
        this._manifest = new File(path.resolve(this.dir, Workspace.MANIFEST_FILENAME))
    }

    get manifest() { return this._manifest }
    get props() { return this._props }
    get dir() { return this._dir }
    get session() { return this._session }
    
    get data() {
        return this.manifest.data?.json()
    }

    get exists() {
        return this.manifest?.exists
    }

    async load() {
        this.manifest.load()
    }

    async create() {
        return new Promise((resolve, reject) => {
            const _default = JSON.stringify(Workspace.DEFAULT_MANIFEST, null, 2)
            
            fs.existsSync(this.dir) || fs.mkdirsSync(this.dir)
            fs.writeFileSync(path.resolve(this.dir, Workspace.MANIFEST_FILENAME), `${_default}\n`, 'utf8')

            resolve()
        })
        .then(() => this.load())
    }

    async initialize () {
        return this.load()
    }

    // saveContext(data: object) {
    //     this.manifest.context = merge(Object.assign({}, this.data.context), data || {})
    //     const manifest = JSON.stringify(this.data, null, 2)
    //     fs.writeFileSync(path.resolve(this.dir, _.MANIFEST_FILENAME), `${manifest}\n`, 'utf8')
    // }

    // context(id: Id) {
    //     return this.data && this.data.context ? (id ? this.data.context[id] : this.data.context) : null
    // }


    // saveData(data) {
    //     this._data = merge(Object.assign({}, this.data), data || {})
    //     const manifest = JSON.stringify(this.data, null, 2)
    //     fs.writeFileSync(path.resolve(this.dir, _.MANIFEST_FILENAME), `${manifest}\n`, 'utf8')
    // }

    

    // initialize () {
    //     return new Promise((resolve, reject) => {
    //         this.reload()
    //         resolve()
    //     })
    // }



    // loadFile (filepath) {
    //   const file = path.resolve(this.dir, filepath)

    //   if (!fs.existsSync(file)) {
    //     // We can't continue without this file
    //     return Promise.reject(new Error(_.ERRORS.FILE_NOT_FOUND(filepath)))
    //   }
    
    //   return new Promise((resolve, reject) => {
    //       try {
    //         // Load the content
    //         const data = fs.readFileSync(file, 'utf8')

    //         resolve(path.extname(filepath).toLowerCase() === '.json' ? JSON.parse(data) : data)
    //       } catch(e) {
    //         reject(e)
    //       }
    //   })
    // }

    // findDirs(dirpath) {
    //     // This is where we want to look
    //     const dir = path.resolve(this.dir, dirpath)

    //     if (!fs.existsSync(dir)) {
    //       // We can't continue without the dir
    //       return Promise.reject(new Error(_.ERRORS.DIR_NOT_FOUND(dirpath)))
    //     }

    //     return new Promise((resolve, reject) => {
    //         // Let's see what we've got
    //         const dirs = fs.readdirSync(dir).filter(d => (d && path.extname(d).length === 0 && !_.IGNORE_DIRS.includes(d)))

    //         resolve(dirs)
    //     })
    // }
}

// _.ERRORS = {
//     FILE_NOT_FOUND: (name) => name ? `The ${name} file is missing` : `The file is missing`,
//     DIR_NOT_FOUND: (name) => name ? `The ${name} directory is missing` : `The directory is missing`
// }


// _.DEFAULT_MANIFEST = () => ({
//     type: "carmel",
//     description: "This is a Carmel Workspace",
//     context: {}
// })

// _.IGNORE_DIRS = [".DS_Store"]

// module.exports = _