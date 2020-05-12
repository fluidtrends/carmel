import fs from 'fs-extra'
import path from 'path'
import merge from 'deepmerge'

import { 
    IWorkspace, 
    WorkspaceProps, 
    Path, 
    IFile,
    IDir,
    File,
    Dir,
    ISession 
} from '.'

export class Workspace implements IWorkspace {

    public static MANIFEST_FILENAME: Path = ".carmel.json"
    public static DEFAULT_MANIFEST = {
        type: "carmel",
        context: {}
    }

    protected _props: any;
    protected _dir: IDir;
    protected _manifest: IFile;
    protected _session?: ISession;

    constructor(props: any) {
        // this._session = session
        this._props = props
        this._dir = new Dir(this.props.cwd || process.cwd())
        this._manifest = new File(path.resolve(this.dir.path, Workspace.MANIFEST_FILENAME))
    }

    get manifest() { return this._manifest }
    get props() { return this._props }
    get dir() { return this._dir }
    get session() { return this._session }
    
    get data() {
        return this.manifest.data.json()
    }

    get exists() {
        return this.manifest.exists
    }

    async load() {
        this.manifest.load()
    }

    async create() {
        return new Promise((resolve, reject) => {
            this.manifest.data.update(Workspace.DEFAULT_MANIFEST)
            this.manifest.save()
            
            resolve(this.manifest.data.json())
        })
    }

    async initialize () {
        return this.load()
    }

    saveContext(context: object) {
        this.manifest.data.append({ context })
        this.manifest.save()
    }

    async loadFile (path: Path) {
        const file = new File(path)
        return file.load()
    }

    async findDirs(dirpath: Path) {
        return this.dir.dir(dirpath).dirs()
    }

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