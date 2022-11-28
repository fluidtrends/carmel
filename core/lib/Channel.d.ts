import { Station } from '.';
export declare class Channel {
    static PREFIX: string;
    static SYSTEM_ID: string;
    static SYSTEM_MAIN_ID: string;
    static SYSTEM_OPERATORS_ID: string;
    static ACCEPT_EVENT_ID: string;
    static RESPONSE_EVENT: string;
    static RESPONSE_ALL_EVENT: string;
    static REQUEST_EVENT: string;
    static EVENT: {
        OPERATOR_ACCEPT: string;
    };
    private _id;
    private _station;
    private _onEvent;
    private _sendQueue;
    private _isOpen;
    private _config;
    private _events;
    private _registerEvent;
    private _listenForEvent;
    private _eventHandler;
    constructor(id: string, config: any, station: Station);
    static Id(id: string, event: string, type: string): string;
    get events(): any;
    get config(): any;
    get isOpen(): boolean;
    get id(): string;
    get station(): Station;
    get sendQueue(): any;
    flush(): Promise<void>;
    eventHandler(id: string): import("./types").IFunction | undefined;
    onEvent(id: string, data: any, type: string, from: string): Promise<void>;
    queueEvent(e: any): Promise<void>;
    sendEvent(id: string, data: any, type?: string): Promise<{
        message: string;
    } | undefined>;
    listenForEvent(id: string, type: string, log: any): Promise<void>;
    registerEvent(id: string): Promise<void>;
    addEvent(id: string, f: string): Promise<void>;
    open(): Promise<void>;
    close(): Promise<void>;
}
