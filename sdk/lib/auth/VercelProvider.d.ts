import { Authenticator, IAuthKey, IAuthProvider } from '..';
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
    get authenticator(): Authenticator;
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
     */
    initialize(): Promise<void>;
}
