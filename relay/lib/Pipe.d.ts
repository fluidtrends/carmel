import { OFFER, MULTIADDRESS, ID, EVENT, PAYLOAD, Server } from '.';
export declare class Pipe {
    private _io;
    private _adapter;
    private _server;
    private _join;
    private _leave;
    private _disconnect;
    constructor(server: Server, index: number);
    get server(): Server;
    get adapter(): any;
    addresses(): Promise<string[]>;
    get io(): any;
    addPeer(id: ID, address: MULTIADDRESS): Promise<void>;
    removePeer(id: ID, address: MULTIADDRESS): Promise<void>;
    isValidOffer(offer: OFFER): string | false;
    sendToPeer(socket: any, address: MULTIADDRESS, event: EVENT, payload: PAYLOAD): Promise<void>;
    handshake(socket: any, offer: OFFER): Promise<void>;
    disconnect(socket: any): Promise<void>;
    leave(peer: any, address: any): Promise<void>;
    sync(socket: any, address: MULTIADDRESS): Promise<void>;
    join(socket: any, address: MULTIADDRESS): Promise<void>;
}
