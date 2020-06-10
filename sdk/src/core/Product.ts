import path from 'path'
import fs from 'fs'

import { 
    IProduct, 
    Path, 
    IFile,
    IDir,
    Target,
    File,
    Name,
    Dir,
    ProductState,
    ISession,
    ISnapshot,
    ICommand,
    Id,
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
    protected _state: ProductState;

    /** @internal */
    protected _session?: ISession;

    /** @internal */
    protected _snapshot?: ISnapshot;

    /**
     * 
     * @param session 
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
     * 
     * @param target 
     * @param id 
     */
    async runScript(target: Target, id: Id) {
        // This is the product id 
        const productId = this.manifest.data.json().id 

        // Look for the packer in the manifest
        const packerId = this.manifest.data.json().packer
        const packerVersion = this.manifest.data.json().packerVersion

        if (!packerId || !packerVersion) {
            // No packer specified - not good, nothing to look for anymore
            this.changeState(ProductState.UNLOADED)
            return
        }
        
        const stackId = this.manifest.data.json().stack
        const stackVersion = this.manifest.data.json().stackVersion
    
        if (!stackId || !stackVersion) {
            // No stack specified - not good, nothing to look for anymore
            this.changeState(ProductState.UNLOADED)
            return
        }

        const stackDir = path.resolve(this.session?.index.sections.stacks.path, stackId, stackVersion, stackId)
        const packerDir = path.resolve(this.session?.index.sections.packers.path, packerId, packerVersion, packerId)

        process.env.CARMEL_STACK = stackId
        process.env.CARMEL_PACKER = packerId
        process.env.CARMEL_STACK_VERSION = stackVersion
        process.env.CARMEL_PACKER_VERSION = packerVersion
        process.env.CARMEL_STACK_HOME = stackDir
        process.env.CARMEL_PACKER_HOME = packerDir
        process.env.CARMEL_PRODUCT_HOME = this.dir.path
        process.env.CARMEL_PRODUCT_ID = productId
        process.env.CARMEL_TARGET = target
        process.env.CARMEL_SCRIPT_NAME = id

        const scriptFile = new File(path.resolve(stackDir, 'scripts', target, `${id}.js`))
        if (!scriptFile?.exists) {
            // No packer specified - not good, nothing to look for anymore
            this.changeState(ProductState.UNLOADED)
            return
        }

        try {
            const script = require(scriptFile!.path!).default
            await script()
        } catch (e) {
            this.changeState(ProductState.UNLOADED)
            throw e
        }
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

        // Prepare the snapshot if necessary and if all good,
        // then tell everyone we're ready for action
        this.changeState(ProductState.READY)

        // Let callers access us directly
        return this
    }

    /**
     * 
     */
    async create(data?: any) {
        this.manifest.data.update(data)
        this.manifest.save()

        return this.manifest.data.json()
    }

    async createFromTemplate(id: Id) {
        const template = await this.session?.findTemplate(id)

        if (!template) {
            throw Errors.ProductCannotCreate(Strings.TemplateIsMissingString(id))
        }

        await template!.install(this.dir, this)

        return this.load()
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