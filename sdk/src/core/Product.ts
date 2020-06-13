import path from 'path'

import { 
    IProduct, 
    Path, 
    IFile,
    IDir,
    Target,
    File,
    IServer,
    Server,
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
    protected _id?: Id;

    /** @internal */
    protected _props: any;

    /** @internal */
    protected _dir: IDir;

     /** @internal */
    protected _cacheDir?: IDir;

    /** @internal */
    protected _server: IServer;

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
        this._server = new Server(this)
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
    get server() {
        return this._server
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
    get id() {
        return this._id
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

    /** @internal */
    private async loadCache() {
        // Look for the packer and stack in the manifest
        const packerId = this.manifest.data.json().packer
        const stackId = this.manifest.data.json().stack

        // Look for the exact versions
        const packerVersion = this.manifest.data.json().packerVersion
        const stackVersion = this.manifest.data.json().stackVersion

        // Get the fresh packer and stack
        const packer = packerId && await this.session?.index.installArchive({ id: packerId, version: packerVersion, section: "packers" })
        const stack = stackId && await this.session?.index.installArchive({ id: stackId, version: stackVersion, section: "stacks" })

        return { packer, stack }
    }

    /**
     * 
     * @param target 
     * @param port 
     * @param watch 
     */
    async resolvePacker(target: Target, port: number, watch: boolean) {
        // Start by looking up this product's id and cache
        const productId = this.manifest.data.json().id
        const bundle = this.manifest.data.json().bundle
        const bundleVersion = this.manifest.data.json().bundleVersion
        const templateName = this.manifest.data.json().template
        const productCacheDir = new Dir(this.session?.index.sections.products.path)?.dir(productId)

        const templateId = `${bundle}/${bundleVersion}/${templateName}`

        let cache = undefined

        if (!productCacheDir?.exists) {
            // Let's setup cache structure
            const template = await this.session?.findTemplate(templateId)
            cache = await template!.install(this.dir, this)
        }

        // Make sure we have a product cache available
        cache = cache === undefined ? await this.loadCache() : cache

        // Figure out the roots
        const packerDir = new Dir(cache.packer.path)
        const stackDir = new Dir(cache.stack.path)

        // Look up the packer and the stack config
        const packerInstance = require(packerDir!.path!)
        const stackConfig = require(stackDir!.file('carmel.json')!.path!)

        // Make sure we've got them all
        if (!packerInstance || !packerInstance[target] || !stackConfig || !stackConfig[target] || !stackDir!.file('carmel.json')?.exists) return

        // Build the packer options
        const options = {
            contextDir: productCacheDir!.path,
            mainDir: this.dir!.path,
            entryFile: stackDir!.file(stackConfig[target].entry)!.path!,
            destDir: productCacheDir?.dir(`.${target}`)!.path!,
            stackDir: stackDir!.path,
            templateFile: stackDir!.file(stackConfig[target].template)!.path!,
            watch, 
            port
        }

        // The code workspace
        const workspace = productCacheDir?.file('carmel.code-workspace')

        // Let's send it all back
        const packer = new packerInstance[target].Packer(options)

        return { packer, workspace }
    }

    /**
     * 
     */
    get cacheDir() {
        return this._cacheDir
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

        // Keep track of the id
        this._id = this.manifest.data.json().id

        // Resolve the cache roo
        this._cacheDir = new Dir(path.resolve(this.session?.index.sections.products.path, this.id!))

        // Get this product's server ready
        await this.server.start()

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