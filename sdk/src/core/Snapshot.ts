import { 
    IProduct,
    ISnapshot,
    Id,
    Target, 
    App,
    Chunk,
    IApp,
    Name, 
    Errors,
    Strings,
    IChunk,
    IDir
 } from '..'

 import shortid from 'shortid'

/**
 * 
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Snapshot.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Snapshot.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Snapshot.ts/stats | Code Stats}
 *
 * @category Core
 */
export class Snapshot implements ISnapshot {

    /** The product cache */
    public static SNAPSHOT_DIRNAME = ".carmel"  

    /** @internal */
    protected _product: IProduct;

    /** @internal */
    protected _dir?: IDir;

    /** @internal */
    protected _chunksDir?: IDir;

    /** @internal */
    protected _id: Id;

    /** @internal */
    protected _apps?: Map<Target, IApp>;

    /** @internal */
    protected _chunks?: Map<Name, IChunk>;

    /**
     * 
     * @param product 
     * @param target 
     */
    constructor(product: IProduct) {
        this._product = product;
        this._dir = this.product.dir.dir(Snapshot.SNAPSHOT_DIRNAME)?.make()
        this._id = shortid.generate()
    }

    /**
     * 
     */
    get product() {
        return this._product
    }

    /**
     * 
     */
    get exists() {
        return this.dir !== undefined && this.dir?.exists
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
    get dir() {
        return this._dir
    }

    /**
     * 
     */
    get chunksDir() {
        return this._chunksDir
    }

    /**
     * 
     */
    get apps() {
        return this._apps
    }

    /**
     * 
     */
    get chunks() {
        return this._chunks
    }

    /**
     * 
     * @param name 
     */
    async chunk(name: Name) {
        let chunk = this.chunks?.get(name)

        // Looks like it's already loaded
        if (chunk) return chunk

        // Load the chunk
        chunk = await new Chunk(this, name).load()

        // Something went horribly wrong
        if (!chunk) return undefined

        // Keep track of it in memory
        this._chunks = this._chunks || new Map<Name, IChunk>();
        this._chunks.set(name, chunk)

        // Give the caller what they need
        return chunk
    }

    /**
     * 
     * @param target 
     */
    async app(target: Target) {
        let app = this.apps?.get(target)

        // Looks like it's already loaded
        if (app) return app

        // Load the app
        app = await new App(this, target).load()

        if (!app) return undefined

        // Keep track of it in memory
        this._apps = this._apps || new Map<Target, IApp>();
        this._apps.set(target, app)

        // Give the caller what they need
        return app
    }

    /**
     * 
     */
    async load() {
        // We need this to exist
        if (!this.exists) return undefined

        // Setup the main chunks location if necessary
        this._chunksDir = this.dir?.dir('chunks')?.make() 

        // Look for chunks
        await Promise.all(this.product.dir.dir('chunks')?.dirs.map(async name => await this.chunk(name)) || [])

        if (!this.chunks || this.chunks.size === 0) {
            // Absolutely need some chunks here
            throw Errors.CannotTakeSnapshot(Strings.ChunksAreMissingString())
        }

        // Should be all good now
        return this.exists ? this : undefined
    }
}


// const _makeChunkShadows = ({ shadowsChunksDir, chunk, shadows }) => {    
//     // Let's make sure the chunk shadow locations are ready
//     const chunkDir = path.resolve(shadowsChunksDir, chunk.name)
//     const chunkScreensDir = path.resolve(chunkDir, 'screens')
//     fs.existsSync(chunkScreensDir) && fs.removeSync(chunkScreensDir) 
//     fs.mkdirsSync(chunkScreensDir)  

//     Object.keys(SHADOW_TYPES).map(type => {
//         const screensShadow = Object.keys(chunk.routes).map(screen => SHADOW_CHUNK_SCREEN({ chunk, screen, type })).join('\n')
//         shadows[type] = `${shadows[type]}${SHADOW({ chunk, type })}\n`
//         fs.writeFileSync(path.resolve(chunkDir, `index${SHADOW_TYPES[type]}.js`), SHADOW_CHUNK({ chunk, type }), 'utf8')
//         fs.writeFileSync(path.resolve(chunkScreensDir, `index${SHADOW_TYPES[type]}.js`), screensShadow, 'utf8')
//     })
// }

// const _makeShadows = (workspace, chunks) => {
//     // The shadows are empty to start with
//     var shadows = { web: "", desktop: "", mobile: ""}
 
//     // This is where we expect the shadows to exist
//     const shadowsDir = path.resolve(workspace.dir, '.app')
//     const shadowsChunksDir = path.resolve(shadowsDir, 'chunks')

//     // We want to make sure we start with fresh locations 
//     fs.existsSync(shadowsChunksDir) && fs.removeSync(shadowsChunksDir) 
//     fs.mkdirsSync(shadowsChunksDir)  
//     Object.keys(SHADOW_TYPES).map(type => fs.existsSync(path.resolve(shadowsDir, type)) && fs.removeSync(path.resolve(shadowsDir, type)))
    
//     // We're ready to produce the shadow chunks
//     chunks.map(chunk => _makeChunkShadows({ chunk, shadowsChunksDir, shadows }))

//     // Generate the main shadows
//     Object.keys(SHADOW_TYPES).map(type => fs.writeFileSync(path.resolve(shadowsChunksDir, `index${SHADOW_TYPES[type]}.js`), shadows[type], 'utf8'))
// }

// const run = ({ session, props, script }) => {
//     _makeShadows (session.workspace, props.sections)
//     return script.exec(Object.assign({}, script.props, props))
// }

// SHADOW_TYPES = { web: ".web", desktop: ".desktop", mobile: "" }
// SHADOW_CHUNK_SCREEN = ({ chunk, screen, type }) => `export { default as ${screen} } from '../../../../chunks/${chunk.name}/screens/${screen}${SHADOW_TYPES[type]}.js'`
// SHADOW = ({ chunk, type }) => `export { default as ${chunk.name} } from './${chunk.name}/index${SHADOW_TYPES[type]}.js'`
// SHADOW_CHUNK = ({ chunk, type }) => `
// import config from '../../../chunks/${chunk.name}/chunk.json'
// import * as screens from './screens/index${SHADOW_TYPES[type]}.js'
// const chunk = { screens, ...config }
// export default chunk
// `

