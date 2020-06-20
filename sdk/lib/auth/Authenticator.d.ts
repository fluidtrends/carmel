import { IAuthenticator, ISession, IDir, AccessTokenType, AuthBrowserType, IAuthProvider } from '..';
import browserSync from 'browser-sync';
import express, { Express } from 'express';
/**
 *
 */
export declare class Authenticator implements IAuthenticator {
    /** */
    static AUTH_PORT: number;
    /** */
    static AUTH_HOST: string;
    /** */
    static AUTH_PROTOCOL: string;
    /** @internal */
    protected _session: ISession;
    /** @internal */
    protected _port: number;
    /** @internal */
    protected _host: string;
    /** @internal */
    protected _protocol: string;
    /** @internal */
    protected _dir: IDir;
    /** @internal */
    protected _app: Express;
    /** @internal */
    protected _browser: AuthBrowserType;
    /** @internal */
    protected _providers: Map<AccessTokenType, IAuthProvider>;
    /**
     *
     * @param session
     */
    constructor(session: ISession);
    /**
     *
     */
    get session(): ISession;
    /**
     *
     */
    get providers(): Map<AccessTokenType, IAuthProvider>;
    /**
     *
     */
    get app(): express.Express;
    /**
     *
     */
    get browser(): browserSync.BrowserSyncInstance;
    /**
     *
     */
    get port(): number;
    /**
     *
     */
    get host(): string;
    /**
     *
     */
    get dir(): IDir;
    /**
     *
     */
    get protocol(): string;
    /**
     *
     */
    get baseUrl(): string;
    /**
     *
     * @param uri
     */
    endpoint(uri: string): string;
    /**
     *
     */
    openBrowser(): Promise<void>;
    /** @internal */
    _initializeApp(): Promise<void>;
    /**
     *
     */
    stop(when: number): Promise<void>;
    /**
     *
     */
    initialize(): Promise<void>;
    /**
     *
     */
    setupSecurity(): Promise<void>;
    /**
     *
     */
    start(): Promise<unknown>;
}
