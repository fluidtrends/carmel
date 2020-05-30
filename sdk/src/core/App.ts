import { 
    IApp,
    Target,
    ISnapshot,
    IDir
 } from '..'

/**
 * 
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/App.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/App.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/App.ts/stats | Code Stats}
 *
 * @category Core
 */
export class App implements IApp {

    /** @internal */
    protected _target: Target;

    /** @internal */
    protected _snapshot: ISnapshot;

    /** @internal */
    protected _dir?: IDir;

    /**
     * 
     * @param product 
     * @param target 
     */
    constructor(snapshot: ISnapshot, target: Target) {
        this._snapshot = snapshot;
        this._target = target;
        this._dir = this.snapshot.dir?.dir(this.target)
    }

    /**
     * 
     */
    get target() {
        return this._target
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
