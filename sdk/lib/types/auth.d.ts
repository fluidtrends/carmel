import { ISession, IDir } from '.';
import { RequestHandler, Express } from 'express';
import expressSession, { Store } from 'express-session';
import SessionFileStore from 'session-file-store';
import { BrowserSyncInstance } from 'browser-sync';
export declare const AuthSession: typeof expressSession;
export declare const AuthStore: SessionFileStore.FileStore;
export declare type AuthStoreType = Store;
export declare type AuthSessionType = RequestHandler;
export declare type AuthBrowserType = BrowserSyncInstance;
export declare enum AccessTokenType {
    UNKNOWN = "unknown",
    GITHUB = "github",
    VERCEL = "vercel"
}
export declare type AccessToken = {
    type: AccessTokenType;
    value: string;
};
export declare type User = {
    id: string;
    username: string;
    imageUrl: string;
    name: string;
    location: string;
    email: string;
    tokens: AccessToken[];
    [key: string]: any;
};
export interface IAuthProvider {
    readonly authenticator: IAuthenticator;
    initialize(): Promise<any>;
}
export interface IAuthenticator {
    readonly session: ISession;
    readonly port: number;
    readonly host: string;
    readonly protocol: string;
    readonly baseUrl: string;
    readonly dir: IDir;
    readonly app: Express;
    readonly browser: AuthBrowserType;
    readonly providers: Map<AccessTokenType, IAuthProvider>;
    openBrowser(): Promise<void>;
    endpoint(uri: string): string;
    initialize(): Promise<void>;
    start(): Promise<any>;
    stop(when: number): Promise<any>;
}
