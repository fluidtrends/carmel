import { 
    IScreen,
    IChunk,
    Name,
    IDir
 } from '..'

/**
 * 
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Screen.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Screen.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Screen.ts/stats | Code Stats}
 *
 * @category Core
 */
export class Screen implements IScreen {

    /** @internal */
    protected _chunk: IChunk;

    /** @internal */
    protected _dir?: IDir;

    /** @internal */
    protected _name: Name;

    /**
     * 
     * @param chunk 
     * @param name 
     */
    constructor(chunk: IChunk, name: Name) {
        this._chunk = chunk;
        this._name = name;
        this._dir = chunk.dir?.dir('screens')?.dir(name)
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
    get chunk() {
        return this._chunk
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
    get dir() {
        return this._dir
    }

    /**
     * 
     */
    async load() {
        return this
    }
}
