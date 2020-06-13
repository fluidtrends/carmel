import { IServer, IFile, IProduct, IDir, ServerState } from '..';
/**
 *
 */
export declare class Server implements IServer {
    /** @internal */
    protected _product: IProduct;
    /** @internal */
    protected _state: ServerState;
    /** @internal */
    protected _dir?: IDir;
    /** @internal */
    protected _scriptFile?: IFile;
    /** @internal */
    protected _outputFile?: IFile;
    /** @internal */
    protected _errorFile?: IFile;
    /** @internal */
    protected _pidFile?: IFile;
    /**
     *
     * @param product
     */
    constructor(product: IProduct);
    /**
     *
     */
    get scriptFile(): IFile | undefined;
    /**
     *
     */
    get pidFile(): IFile | undefined;
    /**
     *
     */
    get outputFile(): IFile | undefined;
    get errorFile(): IFile | undefined;
    /**
     *
     */
    get product(): IProduct;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    get state(): ServerState;
    /**
    * Move the Server into a new {@linkcode ServerState}
    *
    * @param state The new {@linkcode ServerState}
    */
    changeState(state: ServerState): void;
    /**
     *
     */
    initialize(): Promise<void>;
    /**
     *
     */
    get isInitialized(): boolean;
    /**
     *
     */
    get isStarted(): boolean;
    /**
     *
     */
    get isRunning(): boolean;
    /**s
     *
     */
    start(): Promise<unknown>;
    /**
     *
     */
    stop(): Promise<unknown>;
}
