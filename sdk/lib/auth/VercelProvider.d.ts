import { Authenticator, IAuthKey, IRepo, IAuthProvider } from '..';
/**
 *
 */
export declare class VercelProvider implements IAuthProvider {
    /** */
    static APP_CLIENT_ID: string;
    /** */
    static APP_CLIENT_SECRET: string;
    /** @internal */
    protected _authenticator: Authenticator;
    /** @internal */
    protected _keys: IAuthKey[];
    /**
     *
     * @param authenticator
     */
    constructor(authenticator: Authenticator);
    /**
     *
     */
    get keys(): IAuthKey[];
    /**
     *
     */
    get token(): string | undefined;
    /**
     *
     */
    get authenticator(): Authenticator;
    /**
     *
     */
    get isLoggedIn(): boolean;
    /**
     *
     */
    setupNewKey(title: string, service?: any): Promise<IAuthKey>;
    /**
     *
     * @param service
     */
    fetchRemoteKeys(service?: any): Promise<never[]>;
    /**
     *
     */
    prepareKeys(): Promise<void>;
    /**
     *
     * @param name
     * @param repo
     */
    push(name: string, repo: IRepo): Promise<any>;
    /**
     *
     * @param uri
     * @param options
     * @param patch
     */
    request(uri: string, options?: any, patch?: boolean): Promise<any>;
    /**
     *
     */
    initialize(): Promise<void>;
}
