import { 
    ISnapshot,
    Name,
    IChunk,
    IDir
 } from '..'

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
     */
    async load() {
        if (this.dir?.exists) return this

        this._srcDir = this.snapshot.product.dir.dir('chunks')?.dir(this.name)
        this.dir?.link(this.srcDir)

        return this.exists ? this : undefined
    }
}
