import { IProduct, Path, IFile, IDir, Target, Dir, ProductState, ISession, ISnapshot, Id, ICode, IPacker } from '..';
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
    protected _id?: Id;
    /** @internal */
    protected _props: any;
    /** @internal */
    protected _dir: IDir;
    /** @internal */
    protected _cacheDir?: IDir;
    /** @internal */
    protected _manifest: IFile;
    /** @internal */
    protected _state: ProductState;
    /** @internal */
    protected _session?: ISession;
    /** @internal */
    protected _snapshot?: ISnapshot;
    /** @internal */
    protected _code: ICode;
    /** @internal */
    protected _packer?: IPacker;
    /**
     *
     * @param session
     */
    constructor(session?: ISession);
    /**
     *
     */
    get packer(): IPacker | undefined;
    /**
     *
     */
    get code(): ICode;
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
    get data(): any;
    /**
     *
     */
    get id(): string | undefined;
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
    get snapshot(): ISnapshot | undefined;
    /**
     *
     */
    get isReady(): boolean;
    /**
     * Move the Product into a new {@linkcode ProductState}
     *
     * @param state The new {@linkcode ProductState}
     */
    changeState(state: ProductState): void;
    /**
     *
     * @param id
     */
    createFromTemplate(id: Id): Promise<this>;
    /**
     *
     */
    openCode(): Promise<void>;
    /**
     *
     */
    loadCache(): Promise<{
        id: any;
        packer: any;
        stack: any;
        dir: Dir | undefined;
    }>;
    /**
     *
     * @param target
     * @param watch
     */
    resolve(target: Target, watch: boolean): Promise<void>;
    /**
     *
     */
    get cacheDir(): IDir | undefined;
    /**
     * Load this product and all its artifacts, including its manifest
     */
    load(): Promise<this>;
    /**
     *
     */
    create(data?: any): Promise<any>;
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
    loadFile(path: Path): Promise<any>;
    /**
     *
     * @param dirpath
     */
    findDirs(dirpath: Path): string[];
}
