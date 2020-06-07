import { ISession, SessionProps, ILogger, Id, Bundle, IProduct, JSON, Target, Template, Version, ArtifactsKind, SessionState } from '..';
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
    /** Start with these sections - always */
    static DEFAULT_SECTIONS: string[];
    /** Use these as mandatory bundles */
    static DEFAULT_BUNDLES: string[];
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
    /** @internal */
    protected _pkg: JSON;
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
    get pkg(): JSON;
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
     * @param install whether we should  the {@linkcode Bundle} if not found
     */
    findBundle(id: Id, version?: Version, install?: boolean): Promise<Bundle | undefined>;
    /** @internal */
    private parseArtifact;
    /**
     * Looks up an artifact in the local index.

     * @param id
     * @param kind
     */
    findArtifact(id: Id, kind: ArtifactsKind, install?: boolean): Promise<Template | undefined>;
    /**
     *
     * @param id
     */
    findTemplate(id: Id, install?: boolean): Promise<Template>;
    /**
     *
     * @param productId
     */
    resolveProduct(target?: Target): Promise<IProduct | undefined>;
    installSystemBundle(bundleId: string): Promise<void>;
    updateIndex(): Promise<void>;
}
