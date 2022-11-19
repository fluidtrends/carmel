export type MULTIADDRESS = string;
export type ID = string;
export type ERROR = string;
export type ANSWER = any;
export type PAYLOAD = any;
export declare enum EVENT {
    PEER = "ws-peer",
    HANDSHAKE = "ws-handshake"
}
export type SIGNAL = {
    type: string;
    sdp: string;
};
export type OFFER = {
    intentId: ID;
    srcMultiaddr: MULTIADDRESS;
    dstMultiaddr: MULTIADDRESS;
    signal: SIGNAL;
    err: ERROR;
    answer: ANSWER;
};
