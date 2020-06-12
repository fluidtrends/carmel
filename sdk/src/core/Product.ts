import path from 'path'

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
     * @param port 
     * @param watch 
     */
    async resolvePacker(target: Target, port: number, watch: boolean) {
        // Look for the packer in the manifest
        const packerId = this.manifest.data.json().packer
        const packerVersion = this.manifest.data.json().packerVersion
        const packerDir = new Dir(this.session?.index.sections.packers.path)?.dir(packerId)?.dir(packerVersion)?.dir(packerId)

        const stackId = this.manifest.data.json().stack
        const stackVersion = this.manifest.data.json().stackVersion
        const stackDir = new Dir(this.session?.index.sections.stacks.path)?.dir(stackId)?.dir(stackVersion)?.dir(stackId)

        if (!stackDir!.dir('node_modules')?.exists || !stackDir!.file('carmel.json')?.exists) {
            return undefined
        }

        // Look up the packer and the stack config
        const packerInstance = require(packerDir!.path!)
        const stackConfig = require(stackDir!.file('carmel.json')!.path!)

        // Make sure we've got them all
        if (!packerInstance || !packerInstance[target] || !stackConfig || !stackConfig[target]) return 

        // Build the packer options
        const packerOptions = {
            contextDir: this.dir.path,
            entryFile: stackDir!.file(stackConfig[target].entry)!.path!,
            destDir: this.dir.dir(`.${target}`)!.path!,
            stackDir: stackDir!.path,
            templateFile: stackDir!.file(stackConfig[target].template)!.path!,
            watch, 
            port
        }

        if (stackDir!.dir('node_modules')?.exists && !this.dir.dir('node_modules')?.exists) {
            // If the stack is a JS stack, and the dependencies are not linked yet, let's link them
            if (!stackDir!.dir('node_modules')?.dir(stackId)?.exists) {
                // Add the stack to itself, if necessary
                stackDir!.dir('node_modules')?.dir(stackId)?.link(stackDir!.dir('lib'))
            }

            // Resolve the stack and its dependencies
            this.dir.dir('node_modules')?.link(stackDir!.dir('node_modules'))
        }

        // Let's send it all back
        return new packerInstance[target].Packer(packerOptions)
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

    /**
     * 
     * @param id 
     */
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