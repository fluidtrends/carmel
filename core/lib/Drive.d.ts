import { Session } from './Session.js';
export declare class Drive {
    static ROOT: string;
    private _session;
    _push: any;
    _pull: any;
    constructor(session: Session);
    get session(): Session;
    get ipfs(): any;
    ls(location?: string): Promise<any>;
    open(id: string): Promise<void>;
    pull(id: string, cid: string): Promise<void>;
    _readDir(dir: string): Promise<void>;
    pushDir(dir: string, base: string): Promise<void>;
    push(id: string, data: any): Promise<void>;
    mount(): Promise<void>;
    unmount(): Promise<void>;
}
