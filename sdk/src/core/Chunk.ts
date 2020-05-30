import { 
    ISnapshot,
    Name,
    IChunk,
    IScreen,
    IFile,
    Screen,
    ChunkConfig,
    ChunkConfigRoute,
    IDir
 } from '..'
import { Product } from './Product';
import { copySync } from 'fs-extra';

/**
 * 
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Chunk.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Chunk.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Chunk.ts/stats | Code Stats}
 *
 * @category Core
 */
export class Chunk implements IChunk {

    /** The default name of the manifest */   
    public static MANIFEST_FILENAME = "chunk.json"

    /** @internal */
    protected _name: Name;

    /** @internal */
    protected _manifest?: IFile;

    /** @internal */
    protected _snapshot: ISnapshot;

    /** @internal */
    protected _dir?: IDir;

    /** @internal */
    protected _srcDir?: IDir;

    /** @internal */
    protected _screens?: Map<Name, IScreen>;

    /** @internal */
    protected _config?: ChunkConfig;

    /**
     * 
     * @param product 
     * @param target 
     */
    constructor(snapshot: ISnapshot, name: Name) {
        this._name = name
        this._snapshot = snapshot;
        this._dir = this.snapshot.dir?.dir('chunks')?.dir(this.name)
    }

    /**
     * 
     */
    get name() {
        return this._name
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
    get screens() {
        return this._screens
    }

    /**
     * 
     */
    get config() {
        return this._config
    }

    /**
     * 
     */
    get exists() {
        return this.dir !== undefined && this.dir.exists && this.manifest !== undefined && this.manifest.exists
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
    get srcDir() {
        return this._srcDir
    }

    /**
     * 
     * @param name 
     */
    async screen(route: ChunkConfigRoute) {
        let screen = this.screens?.get(route.screen)

        // Looks like it's already loaded
        if (screen) return screen

        // Load the screen
        screen = await new Screen(this, route).load()

        if (!screen) return undefined

        // Keep track of it in memory
        this._screens = this._screens || new Map<Name, IScreen>();
        this._screens.set(route.screen, screen)

        // Give the caller what they need
        return screen
    }

    /** @internal */
    private async _loadConfig() {
        // Load up the manifest and figure out the config details
        this.manifest?.load()
        this._config = this.manifest!.data.json() as ChunkConfig

        // We gotta make sure the config works
        if (!this.config) return false

        // No routes needed but no error, let's just leave silently
        if (!this.config.routes || this.config.routes.length === 0) return true

        // Let's see the screen names we've got available
        const screenNames = this.dir?.dir('screens')?.dirs

        // This is problematic because we have routes we need to satisfy
        if (!screenNames || screenNames.length === 0) return false

        await Promise.all(this.config.routes.map(async r => {
            // Check if the screen is specified in this route and if it's available
            const route = r as ChunkConfigRoute
            if (!route || !route.screen || !screenNames.includes(route!.screen)) return

            // Alright, we've got a valid route so let's build the screen
            await this.screen(route) 
        }))

        return true
    }

    /**
     * 
     */
    async load() {
        // Look up the source location
        this._srcDir = this.snapshot.product.dir.dir('chunks')?.dir(this.name)

        // Link it up here
        this.dir?.link(this.srcDir)

        // Let's see if we have a manifest
        this._manifest = this.dir?.file(Chunk.MANIFEST_FILENAME)

        // This is not good
        if (!this.exists) return undefined

        // Look for the config
        if (!await this._loadConfig()) return undefined

        // Looks like we're ready to go
        return this
    }
}
