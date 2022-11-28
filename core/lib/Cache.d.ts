declare enum STORE {
    SESSION = "session",
    DATA = "data",
    BLOBS = "blobs"
}
export declare class Cache {
    static STORE: typeof STORE;
    private _level;
    private _root;
    private _stores;
    private _isBrowser;
    constructor(isBrowser: boolean, root?: string);
    get root(): string;
    get isBrowser(): boolean;
    get level(): any;
    get stores(): any;
    store(type: STORE): any;
    _parseId(id: string): (string | undefined)[];
    close(): Promise<void>;
    put(itemId: string, data: any): Promise<void>;
    get(itemId: string): Promise<any>;
    remove(itemId: string): Promise<any>;
}
export {};
