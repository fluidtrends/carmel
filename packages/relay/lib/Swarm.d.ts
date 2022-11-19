import { MULTIADDRESS, ID, Server } from '.';
export declare class Swarm {
    private _server;
    private _set;
    private _get;
    private _del;
    constructor(server: Server);
    get server(): Server;
    start(): Promise<void>;
    addresses(): Promise<string[]>;
    addPeer(id: ID, address: MULTIADDRESS): Promise<void>;
    removePeer(address: MULTIADDRESS): Promise<void>;
    status(): Promise<{
        timestamp: string;
        totalPeers: number;
        addresses: string[];
    }>;
}
