import { Session } from '@carmel/mesh/src';
export declare class Node {
    private _session;
    private _root;
    constructor(config?: any);
    get session(): Session;
    get root(): string;
    stop(): Promise<void>;
    start(): Promise<void>;
    get send(): any;
}
