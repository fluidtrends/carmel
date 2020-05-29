import { ISession, SessionProps, IWorkspace, ILogger } from '.';
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
    protected _props: SessionProps;
    /** @internal */
    protected _logger: ILogger;
    /** @internal */
    protected _index: any;
    /** @internal */
    protected _workspace?: IWorkspace;
    /**
     * Builds a new Session with the given {@linkcode SessionProps} properties
     *
     * @param props The {@linkcode SessionProps} properties
     */
    constructor(props?: SessionProps);
    /** */
    get props(): SessionProps;
    /** */
    get logger(): ILogger;
    /** */
    get index(): any;
    /** */
    get workspace(): IWorkspace | undefined;
    /** */
    set(key: string, val: any): any;
    /** */
    get(key: string): any;
    /**
     *  Initializes the Session and makes sure the index is ready to go.
     */
    initialize(): Promise<void>;
    /**
     */
    destroy(): Promise<void>;
    /**
     * Looks for a {@linkcode Workspace} in the current working directory
     */
    resolveWorkspace(): Promise<IWorkspace>;
    /**
     * Looks up a {@linkcode Bundle} in the index
     *
     * @param id The {@linkcode Bundle} id
     * @param version the {@linkcode Bundle} version
     */
    findBundle(id: string, version: string): Promise<any>;
    installSystemBundle(bundleId: string): Promise<void>;
    updateIndex(): Promise<any>;
}
