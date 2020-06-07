export declare type Id = string;
export declare type Version = string;
export declare type Name = string;
export declare type Path = string;
export declare type UTF8 = string;
export declare type Module = any;
export declare type JSON = {
    [key: string]: any;
};
export declare type CommandArg = {
    name: string;
    value: any;
};
export interface IClass {
}
export declare enum ArtifactsKind {
    UNKNOWN = "unknown",
    TEMPLATES = "templates",
    ASSETS = "assets",
    CHUNKS = "chunks"
}
export declare enum ProductState {
    UNKNOWN = 0,
    UNLOADED = 10,
    LOADING = 20,
    LOADED = 30,
    READY = 40
}
export declare enum SessionState {
    UNKNOWN = 0,
    UNINITIALIZED = 10,
    INITIALIZING = 20,
    INITIALIZED = 30,
    READY = 40
}
export declare enum EngineState {
    UNKNOWN = 0,
    STOPPED = 10,
    STARTING = 20,
    STARTED = 30,
    READY = 40,
    RUNNING = 50
}
export declare enum Target {
    UNKNOWN = "unknown",
    NONE = "none",
    LOCAL = "local",
    WEB = "web",
    CLOUD = "cloud",
    BLOCKCHAIN = "blockchain",
    MOBILE = "mobile"
}
export declare enum CommandType {
    UNKNOWN = "unknown",
    ENVIRONMENT = "environment",
    WORKSPACE = "workspace",
    PRODUCT = "product"
}
