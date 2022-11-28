/// <reference types="node" />
import http from 'http';
import { Pipe, Swarm } from '.';
import { Cluster } from 'ioredis';
import { HttpTerminator } from 'http-terminator';
export declare class Server {
    private _app;
    private _terminator?;
    private _http?;
    private _io?;
    private _pipe?;
    private _pub?;
    private _sub?;
    private _adapter?;
    private _adapterNext?;
    private _swarm;
    constructor();
    get swarm(): Swarm;
    get pipe(): Pipe[] | undefined;
    get terminator(): HttpTerminator | undefined;
    get sub(): Cluster | undefined;
    get pub(): Cluster | undefined;
    get adapter(): any;
    get adapterNext(): any;
    get io(): any[] | undefined;
    get app(): any;
    get http(): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> | undefined;
    connect(io: any, pipe: any): void;
    stop(): Promise<void>;
    start(): Promise<void>;
}
