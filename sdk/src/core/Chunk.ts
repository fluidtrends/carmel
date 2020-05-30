import { 
    ISnapshot,
    Name,
    IChunk,
    IScreen,
    Screen,
    IDir
 } from '..'
import { Product } from './Product';

/**
 * 
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Chunk.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Chunk.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Chunk.ts/stats | Code Stats}
 *
 * @category Core
 */
export class Chunk implements IChunk {

    /** @internal */
    protected _name: Name;

    /** @internal */
    protected _snapshot: ISnapshot;

    /** @internal */
    protected _dir?: IDir;

    /** @internal */
    protected _srcDir?: IDir;

    /** @internal */
    protected _screens?: Map<Name, IScreen>;

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
    get exists() {
        return this.dir !== undefined && this.dir.exists
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
    async screen(name: Name) {
        let screen = this.screens?.get(name)

        // Looks like it's already loaded
        if (screen) return screen

        // Load the screen
        screen = await new Screen(this, name).load()

        if (!screen) return undefined

        // Keep track of it in memory
        this._screens = this._screens || new Map<Name, IScreen>();
        this._screens.set(name, screen)

        // Give the caller what they need
        return screen
    }

    /**
     * 
     */
    async load() {
        this._srcDir = this.snapshot.product.dir.dir('chunks')?.dir(this.name)
        this.dir?.link(this.srcDir)

        if (!this.exists) return undefined

         // Look for screens
        await Promise.all(this.dir?.dir('screens')?.dirs.map(async name => await this.screen(name)) || []) 

        // No screens, nothing else needed for us to do
        if (!this.screens) return this

        return this
    }
}
