import { Session } from './index.js';
export declare class Gateway {
    private _cid;
    private _ipfs;
    private _ctl;
    private _isBrowser;
    private _mesh;
    private _session;
    private _syncTimer;
    private sync;
    private _refresh;
    constructor(session: Session);
    get refresh(): number;
    get syncTimer(): any;
    get session(): Session;
    get mesh(): any;
    get ipfs(): any;
    get ctl(): any;
    get cid(): string;
    get isBrowser(): boolean;
    stopSync(): Promise<void>;
    startSync(): Promise<void>;
    _sync(): Promise<void>;
    resolveRelays(): Promise<any>;
    startIPFS(ipfs?: any): Promise<void>;
    start(ipfs?: any): Promise<void>;
    stop(): Promise<void>;
}
