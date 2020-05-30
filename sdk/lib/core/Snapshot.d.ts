import { IProduct, ISnapshot, Id, Target, IApp, Name, IChunk, IDir } from '..';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Snapshot.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Snapshot.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Snapshot.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Snapshot implements ISnapshot {
    /** The product cache */
    static SNAPSHOT_DIRNAME: string;
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
    constructor(product: IProduct);
    /**
     *
     */
    get product(): IProduct;
    /**
     *
     */
    get exists(): boolean;
    /**
     *
     */
    get id(): string;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    get chunksDir(): IDir | undefined;
    /**
     *
     */
    get apps(): Map<Target, IApp> | undefined;
    /**
     *
     */
    get chunks(): Map<string, IChunk> | undefined;
    /**
     *
     * @param name
     */
    chunk(name: Name): Promise<IChunk | undefined>;
    /**
     *
     * @param target
     */
    app(target: Target): Promise<IApp | undefined>;
    /**
     *
     */
    load(): Promise<this | undefined>;
}
