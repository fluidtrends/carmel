/** @category Strings */
export const FileDoesNotExistString = (file: string) => `The ${file} file does not exit`;

/** @category Strings */
export const FileCouldNotBeLoadedString = (file: string, reason: string) => `The ${file} could not be loaded because ${reason}`;

/** @category Strings */
export const DirDoesNotExistString = (dir: string) => `The ${dir} directory does not exist`;

/** @category Strings */
export const ArgumentIsMissingString = (arg: string) => `The ${arg} argument is missing`

/** @category Strings */
export const SessionIsMissingString = () => `The session is missing`

/** @category Strings */
export const ProductIsMissingString = () => `The product is missing`

/** @category Strings */
export const TargetNotSupportedString = (target: string) => `The target is not supported`

/** @category Strings */
export const StackTargetScriptIsMissingString = (target: string, name: string) => `The required ${target}/${name} stack script is missing`

/** @category Strings */
export const ProductIsNotReadyString = () => `The product is not ready yet`

/** @category Strings */
export const WorkspaceIsMissingString = () => `The workspace is missing`

/** @category Strings */
export const CommandIsMissingString = () => `The command is missing`

/** @category Strings */
export const CommandDoesNotExistString = (name: string) => `The ${name} command does not exist`;

/** @category Strings */
export const CommandAlreadyExistsString = (name: string) => `The ${name} command already exists`;

/** @category Strings */
export const CommandCannotExecuteString = (name: string, reason: string) => `The ${name} command could not execute because ${reason}`;

/** @category Strings */
export const PluginCannotLoadString = (name: string, reason: string) => `The ${name} plugin cannot load because ${reason}`;

/** @category Strings */
export const StackCannotLoadString = (name: string, reason: string) => `The ${name} stack cannot load because ${reason}`;