/** @category Errors */
export declare const FileDoesNotExist: (file: string) => Error;
/** @category Errors */
export declare const FileCouldNotBeLoaded: (file: string, reason: string) => Error;
/** @category Errors */
export declare const DirDoesNotExist: (dir: string) => Error;
/** @category Errors */
export declare const ArgumentIsMissing: (arg: string) => Error;
/** @category Errors */
export declare const SessionIsMissing: () => Error;
/** @category Errors */
export declare const WorkspaceIsMissing: () => Error;
/** @category Errors */
export declare const CommandIsMissing: () => Error;
/** @category Errors */
export declare const CommandDoesNotExist: (name: string) => Error;
/** @category Errors */
export declare const CommandAlreadyExists: (name: string) => Error;
/** @category Errors */
export declare const CommandCannotExecute: (name: string, reason: string) => Error;
/** @category Errors */
export declare const PluginCannotLoad: (name: string, reason: string) => Error;
/** @category Errors */
export declare const StackCannotLoad: (name: string, reason: string) => Error;
