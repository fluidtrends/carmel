import { Session } from './Session';
export declare class Identity {
    static DID_PREFIX: string;
    private _session;
    private _username;
    private _publicKey;
    private _revision;
    private _did;
    constructor(session: Session, data?: any);
    get did(): string;
    get session(): Session;
    get username(): string;
    get publicKey(): string;
    get revision(): number;
    get data(): {
        username: string;
        revision: number;
        publicKey: string;
        did: string;
    } | undefined;
}
