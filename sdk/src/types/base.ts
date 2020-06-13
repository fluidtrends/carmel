export type Id         = string;
export type Version    = string;
export type Name       = string;
export type Path       = string;
export type UTF8       = string;
export type Module     = any;

export type JSON = {
    [key: string]: any
}

export type CommandArg = {
    name: string
    value: any
}

export interface IClass {
}

export enum ArtifactsKind {
    UNKNOWN   = "unknown",
    TEMPLATES = "templates",
    ASSETS    = "assets",
    CHUNKS    = "chunks"
}

export enum ProductState {
    UNKNOWN    = 0,
    UNLOADED   = 10,
    LOADING    = 20,
    LOADED     = 30,
    READY      = 40
}

export enum ServerState {
    UNKNOWN         = 0,
    UNINITIALIZED   = 10,
    INITIALIZING    = 20,
    INITIALIZED     = 30,
    STOPPED         = 40,
    STARTING        = 50,
    STARTED         = 60,
    READY           = 70,
    RUNNING         = 80
}

export enum SessionState {
    UNKNOWN         = 0,
    UNINITIALIZED   = 10,
    INITIALIZING    = 20,
    INITIALIZED     = 30,
    READY           = 40
}

export enum EngineState {
    UNKNOWN  = 0,
    STOPPED  = 10,
    STARTING = 20,
    STARTED  = 30,
    READY    = 40,
    RUNNING  = 50
}

export enum Target {
    UNKNOWN     = "unknown",
    NONE        = "none",
    LOCAL       = "local",
    WEB         = "web",
    CLOUD       = "cloud",
    BLOCKCHAIN  = "blockchain",
    MOBILE      = "mobile"
}

export enum CommandType {
    UNKNOWN = "unknown",
    ENVIRONMENT = "environment",
    WORKSPACE = "workspace",
    PRODUCT = "product"
}