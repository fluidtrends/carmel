import { IApp, IProduct, Target, IDir } from '..';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/App.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/App.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/App.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class App implements IApp {
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
    constructor(product: IProduct, target: Target);
    /**
     *
     */
    get target(): Target;
    /**
     *
     */
    get product(): IProduct;
    /**
     *
     */
    get exists(): boolean | undefined;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    load(): Promise<this | undefined>;
}
