import path from 'path'

import { 
    IWorkspace, 
    Path, 
    IFile,
    Id,
    IDir,
    File,
    Dir,
    Globals,
    IStack,
    ISession 
} from '.'
import { Stack } from './Stack';

export class Workspace implements IWorkspace {
    protected _props: any;
    protected _dir: IDir;
    protected _manifest: IFile;
    protected _session?: ISession;
    protected _stack?: IStack;

    constructor(props: any, session?: ISession) {
        this._props = props
        this._session = session
        this._dir = new Dir(this.props.dir || process.cwd())
        this._manifest = new File(this.dir.path !== undefined ? path.resolve(this.dir.path!, Globals.MANIFEST_FILENAME) : undefined)
    }

    get manifest() { return this._manifest }
    get props() { return this._props }
    get dir() { return this._dir }
    get session() { return this._session }
    get stack() { return this._stack }

    get data() {
        return this.manifest.data.json()
    }

    get exists() {
        return this.manifest.exists
    }

    get context() {
        return this.manifest.data.json().context
    }

    async loadStack() {
        this._stack = new Stack(this.manifest.data.json().stack)
        await this.stack!.load(this)
        return this.stack!
    }

    async load() {
        this.manifest.exists && this.manifest.load()
    }

    async create() {
        this.manifest.data.update({})
        this.manifest.save()

        return this.manifest.data.json()
    }

    async initialize () {
        return this.load()
    }

    saveContext(context: object) {
        this.manifest.data.append({ context })
        this.manifest.save()
    }

    saveData(data: any) {
        this.manifest.data.append(data)
        this.manifest.save()
    }

    async loadFile (path: Path) {
        const file = new File(path)
        return file.load()
    }

    async findDirs(dirpath: Path) {
        return this.dir.dir(dirpath)?.dirs()
    }
}