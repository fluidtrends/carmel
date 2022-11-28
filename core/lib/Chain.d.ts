import { Session } from './Session';
export declare class Chain {
    private _session;
    private _provider;
    private _config;
    constructor(session: Session);
    get session(): Session;
    get provider(): any;
    get config(): any;
    get isReadOnly(): boolean;
    get keys(): any;
    get account(): any;
    get type(): any;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    _fetchIdentity(username: string): Promise<void>;
    _fetchRelays(): Promise<string[]>;
    get fetch(): {
        relays: () => Promise<string[]>;
        identity: (username: string) => Promise<void>;
    };
    get op(): {};
}
