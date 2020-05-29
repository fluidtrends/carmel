import { IProduct, Path, IFile, IDir, ProductState, IStack, ISession, IApp, Target } from '..';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Product.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Product.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Product.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Product implements IProduct {
    /** The default name of the manifest */
    static MANIFEST_FILENAME: string;
    /** @internal */
    protected _props: any;
    /** @internal */
    protected _dir: IDir;
    /** @internal */
    protected _manifest: IFile;
    /** @internal */
    protected _stack?: IStack;
    /** @internal */
    protected _state: ProductState;
    /** @internal */
    protected _session?: ISession;
    /** @internal */
    protected _apps?: Map<Target, IApp>;
    /**
     *
     * @param props
     * @param target
     */
    constructor(session?: ISession);
    /**
     *
     */
    get session(): ISession | undefined;
    /**
     *
     */
    get state(): ProductState;
    /**
     *
     */
    get manifest(): IFile;
    /**
     *
     */
    get dir(): IDir;
    /**
     *
     */
    get stack(): IStack | undefined;
    /**
     *
     */
    get data(): any;
    /**
     *
     */
    get exists(): boolean;
    /**
     *
     */
    get context(): any;
    /**
     *
     */
    get isLoaded(): boolean;
    /**
     *
     */
    get isReady(): boolean;
    /**
     *
     */
    get apps(): Map<Target, IApp> | undefined;
    /**
     *
     * @param target
     */
    app(target: Target): Promise<IApp | undefined>;
    /**
     * Move the Product into a new {@linkcode ProductState}
     *
     * @param state The new {@linkcode ProductState}
     */
    changeState(state: ProductState): void;
    /**
     * Load this product and all its artifacts, including its manifest
     */
    load(): Promise<this>;
    /**
     *
     */
    create(): Promise<any>;
    /**
     *
     * @param context
     */
    saveContext(context: object): void;
    /**
     *
     * @param data
     */
    saveData(data: any): void;
    /**
     *
     * @param path
     */
    loadFile(path: Path): Promise<unknown>;
    /**
     *
     * @param dirpath
     */
    findDirs(dirpath: Path): string[];
}
