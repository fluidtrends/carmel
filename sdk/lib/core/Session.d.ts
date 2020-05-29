import { ISession, SessionProps, ILogger, Id, Bundle, IProduct, Version, SessionState } from '..';
/**
 * Represents an {@linkcode Engine} Session initiated by a client.
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Session.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Session.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Session.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Session implements ISession {
    /** @internal */
    protected _props?: SessionProps;
    /** @internal */
    protected _logger: ILogger;
    /** @internal */
    protected _index: any;
    /** @internal */
    protected _state: SessionState;
    /** @internal */
    protected _product?: IProduct;
    /**
     * Builds a new Session with the given {@linkcode SessionProps} properties
     *
     * @param props The {@linkcode SessionProps} properties
     */
    constructor(props?: SessionProps);
    /** */
    get props(): SessionProps | undefined;
    /** */
    get logger(): ILogger;
    /** */
    get state(): SessionState;
    /** */
    get index(): any;
    /** */
    get isInitialized(): boolean;
    /** */
    get isReady(): boolean;
    /** */
    get product(): IProduct | undefined;
    /** */
    set(key: string, val: any): any;
    /** */
    get(key: string): any;
    /**
     * Move the Session into a new {@linkcode SessionState}
     *
     * @param state The new {@linkcode SessionState}
     */
    changeState(state: SessionState): void;
    /**
     * Make sure the session is ready for action
     */
    makeReady(): Promise<void>;
    /**
     *  Initializes the Session and makes sure the index is ready to go.
     */
    initialize(): Promise<void>;
    /**
     */
    destroy(): Promise<void>;
    /**
     * Looks up a {@linkcode Bundle} in the local index.
     *
     * @param id The {@linkcode Bundle} id
     * @param version the {@linkcode Bundle} version
     */
    findBundle(id: Id, version: Version): Promise<Bundle | undefined>;
    /**
     * Looks up a {@linkcode Stack} in the local index.
     *
     * @param stackId The {@linkcode Stack} id
     */
    findStack(stackId: Id): Promise<undefined>;
    /**
     *
     * @param productId
     */
    resolveProduct(): Promise<IProduct | undefined>;
    installSystemBundle(bundleId: string): Promise<void>;
    updateIndex(): Promise<any>;
}
