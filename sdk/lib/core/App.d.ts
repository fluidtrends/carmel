import { IApp, Target, ISnapshot, IDir } from '..';
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
    protected _snapshot: ISnapshot;
    /** @internal */
    protected _dir?: IDir;
    /**
     *
     * @param product
     * @param target
     */
    constructor(snapshot: ISnapshot, target: Target);
    /**
     *
     */
    get target(): Target;
    /**
     *
     */
    get snapshot(): ISnapshot;
    /**
     *
     */
    get exists(): boolean;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    load(): Promise<this>;
}
