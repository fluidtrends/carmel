export declare const FileDoesNotExist: (file: string) => Error;
export declare const FileCouldNotBeLoaded: (file: string, reason: string) => Error;
export declare const DirDoesNotExist: (dir: string) => Error;
export declare const ArgumentIsMissing: (arg: string) => Error;
export declare const CommandDoesNotExist: (name: string) => Error;
export declare const CommandAlreadyExists: (name: string) => Error;
export declare const CommandCannotExecute: (name: string, reason: string) => Error;
export declare const PluginCannotLoad: (name: string, reason: string) => Error;
