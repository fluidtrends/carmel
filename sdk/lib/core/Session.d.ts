/// <reference types="express-session" />
import { ISession, SessionProps, ILogger, Id, Bundle, IProduct, JSON, Template, IDir, Name, IFile, Version, ArtifactsKind, SessionState, IAuthenticator, AuthStoreType, AccessTokenType, IKeyStore, User } from '..';
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
    /** Default lifetime for a typical session */
    static DEFAULT_EXPIRATION: number;
    /** Use these as mandatory bundles */
    static DEFAULT_BUNDLES: string[];
    /** The id to use for auth */
    static DEFAULT_ID: string;
    /** @internal */
    protected _props?: SessionProps;
    /** @internal */
    protected _logger: ILogger;
    /** @internal */
    protected _index: any;
    /** @internal */
    protected _authDir: IDir;
    /** @internal */
    protected _state: SessionState;
    /** @internal */
    protected _product?: IProduct;
    /** @internal */
    protected _pkg: JSON;
    /** @internal */
    protected _dir: IDir;
    /** @internal */
    protected _manifest?: IFile;
    /** @internal */
    protected _user?: User;
    /** @internal */
    protected _store?: AuthStoreType;
    /** @internal */
    protected _id: Id;
    /** @internal */
    protected _name: Name;
    /** @internal */
    protected _authenticator: IAuthenticator;
    /** @internal */
    protected _keystore: IKeyStore;
    /**
     *
     * Builds a new Session with the given {@linkcode SessionProps} properties
     *
     * @param props The {@linkcode SessionProps} properties
     */
    constructor(props?: SessionProps);
    /** */
    get props(): SessionProps | undefined;
    /** */
    get keystore(): IKeyStore;
    /** */
    get manifest(): IFile | undefined;
    /** */
    get logger(): ILogger;
    /** */
    get authenticator(): IAuthenticator;
    /** */
    get authDir(): IDir;
    /** */
    get state(): SessionState;
    /** */
    get isLoggedIn(): boolean;
    /** */
    get user(): User | undefined;
    /** */
    get index(): any;
    /** */
    get store(): import("express-session").Store | undefined;
    /** */
    get system(): any;
    /** */
    get isInitialized(): boolean;
    /** */
    get isReady(): boolean;
    /** */
    get product(): IProduct | undefined;
    /** */
    get pkg(): JSON;
    /** */
    get dir(): IDir;
    /** */
    get id(): string;
    /** */
    get name(): string;
    /**
     *
     * @param type
     */
    token(type: AccessTokenType): string | undefined;
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
     *
     */
    authenticate(): Promise<void>;
    /**
     * Make sure the session is ready for action
     */
    makeReady(): Promise<void>;
    /** @internal */
    _checkAuth(): Promise<void>;
    /**
     *
     * @param type
     */
    keys(type: AccessTokenType): import("..").IAuthKey[];
    /**
     *  Initializes the Session and makes sure the index is ready to go.
     */
    initialize(): Promise<void>;
    /**
     *
     */
    enableSecurity(): Promise<void>;
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
    resolveProduct(productId?: string): Promise<IProduct | undefined>;
}
