import { Authenticator, IAuthProvider } from '..';
/**
 *
 */
export declare class GitHubAuth implements IAuthProvider {
    /** */
    static APP_CLIENT_ID: string;
    /** */
    static APP_CLIENT_SECRET: string;
    /** @internal */
    protected _authenticator: Authenticator;
    /**
     *
     * @param authenticator
     */
    constructor(authenticator: Authenticator);
    /**
     *
     */
    get authenticator(): Authenticator;
    /**
     *
     * @param clientID
     * @param clientSecret
     */
    initialize(): Promise<void>;
}
