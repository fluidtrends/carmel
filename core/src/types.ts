export enum SESSION_STATUS {
    NEW = 0,
    INITIALIZING = 1,
    READY = 2,
    STOPPING = 3,
    STOPPED = 4,
    CONNECTING = 5,
    CONNECTED = 6
}

export enum DATATYPE {
    TABLE = "table",
    OBJECT = "object"
}

export type ACCOUNT = {
    username: string,
    signature: string,
    publicKey: string,
    cid: string,
    privateKey?: string
}
export interface IFunction {
    handler (props: any): any
}

