import { Session } from '.';
export declare class Station {
    private _session;
    private _channels;
    private _openChannel;
    private _closeChannel;
    constructor(session: Session);
    get session(): Session;
    get channels(): {
        [id: string]: any;
    };
    channel(id: string): any;
    flush(): Promise<void>;
    openChannel(id: string): Promise<any>;
    closeChannel(id: string): Promise<void>;
    addChannel(id: string, data: any): Promise<any>;
    start(): Promise<void>;
    stop(): Promise<void>;
}
