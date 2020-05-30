import path from 'path'

import { 
    IProduct, 
    Path, 
    IFile,
    IDir,
    File,
    Dir,
    ProductState,
    IStack,
    ISession,
    ISnapshot,
    Snapshot,
    Errors,
    Strings
} from '..'

/**
 * 
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Product.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Product.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Product.ts/stats | Code Stats}
 * 
 * @category Core
 */
export class Product implements IProduct {

    /** The default name of the manifest */   
    public static MANIFEST_FILENAME = ".carmel.json"

    /** @internal */
    protected _props: any;

    /** @internal */
    protected _dir: IDir;

    /** @internal */
    protected _manifest: IFile;

    /** @internal */
    protected _stack?: IStack;

    /** @internal */
    protected _state: ProductState;

    /** @internal */
    protected _session?: ISession;

    /** @internal */
    protected _snapshot?: ISnapshot;

    /**
     * 
     * @param props 
     * @param target
     */
    constructor(session?: ISession) {
        this._dir = new Dir(process.cwd())
        this._manifest = new File(this.dir.path !== undefined ? path.resolve(this.dir.path!, Product.MANIFEST_FILENAME) : undefined)
        this._state = ProductState.UNLOADED
        this._session = session
    }

    /**
     * 
     */
    get session() {
        return this._session
    }

    /**
     * 
     */
    get state() {
        return this._state
    }

    /**
     * 
     */
    get manifest() { 
        return this._manifest 
    }

    /**
     * 
     */
    get dir() { 
        return this._dir 
    }

    /**
     * 
     */
    get stack() { 
        return this._stack 
    }

    /**
     * 
     */
    get data() {
        return this.manifest.data.json()
    }

    /**
     * 
     */
    get exists() {
        return this.manifest.exists
    }

    /**
     * 
     */
    get context() {
        return this.manifest.data.json().context
    }

    /**
     * 
     */
    get isLoaded() {
        return this.state >= ProductState.LOADED
    }

    /**
     * 
     */
    get snapshot() {
        return this._snapshot
    }

    /**
     * 
     */
    get isReady() {
        return this.state >= ProductState.READY
    }

    /**
     * Move the Product into a new {@linkcode ProductState}
     * 
     * @param state The new {@linkcode ProductState}
     */
    public changeState(state: ProductState) {
        this._state = state
    }

    /**
     * Load this product and all its artifacts, including its manifest
     */
    async load() {
        // No need to re-load this again
        if (this.isLoaded) return this
        
        if (!this.manifest.exists) {
            // Don't bother without a manifest
            this.changeState(ProductState.UNLOADED)
            return this
        } 

        // Alright, let's do this
        this.changeState(ProductState.LOADING)

        // First things first, let's get the manifest loaded up
        this.manifest.load()

        // Look for the stack in the manifest
        const stackId = this.manifest.data.json().stack
    
        if (!stackId) {
            // No stack specified - not good, nothing to look for anymore
            this.changeState(ProductState.UNLOADED)
            return this
        }
    
        // There we go, we have a stack too
        this._stack = await this.session?.findStack(stackId)
        
        if (!this.stack) {
            // Not quiet yet
            this.changeState(ProductState.UNLOADED)
            throw Errors.ProductCannotLoad(Strings.StackIsMissingString(stackId))
        }

        // Take an initial snapshot
        this._snapshot = await new Snapshot(this).load()

        if (!this.snapshot) {
            // Not quiet yet
            this.changeState(ProductState.UNLOADED)
            throw Errors.ProductCannotLoad(Strings.CannotTakeSnapshotString())
        }

        // Prepare the snapshot if necessary and if all good,
        // then tell everyone we're ready for action
        this.changeState(ProductState.READY)

        // Let callers access us directly
        return this
    }

    /**
     * 
     */
    async create() {
        this.manifest.data.update({})
        this.manifest.save()

        return this.manifest.data.json()
    }

    /**
     * 
     * @param context
     */
    saveContext(context: object) {
        this.manifest.data.append({ context })
        this.manifest.save()
    }

    /**
     * 
     * @param data 
     */
    saveData(data: any) {
        this.manifest.data.append(data)
        this.manifest.save()
    }

    /**
     * 
     * @param path 
     */
    async loadFile (path: Path) {
        const file = new File(path)
        return file.load()
    }

    /**
     * 
     * @param dirpath 
     */
    findDirs(dirpath: Path) {
        return this.dir.dir(dirpath)?.dirs || []
    }
}