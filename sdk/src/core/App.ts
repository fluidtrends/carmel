import { 
    IApp,
    IProduct,
    Target,
    Dir,
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
    protected _product: IProduct;

    /** @internal */
    protected _dir?: IDir;

    /**
     * 
     * @param product 
     * @param target 
     */
    constructor(product: IProduct, target: Target) {
        this._product = product;
        this._target = target;
        this._dir = this.product.dir.dir(this.target)
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
    get product() {
        return this._product
    }

    /**
     * 
     */
    get exists() {
        return this.dir?.exists
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
        return this.exists ? this : undefined
    }
}
