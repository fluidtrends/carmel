/** @category Strings */
export const FileDoesNotExistString = (file: string) => `the ${file} file does not exit`;

/** @category Strings */
export const FileCouldNotBeLoadedString = (file: string, reason: string) => `the ${file} could not be loaded because ${reason}`;

/** @category Strings */
export const DirDoesNotExistString = (dir: string) => `the ${dir} directory does not exist`;

/** @category Strings */
export const ArgumentIsMissingString = (arg: string) => `the ${arg} argument is missing`

/** @category Strings */
export const SessionIsMissingString = () => `the session is missing`

/** @category Strings */
export const CommandIsMissingString = () => `the command is missing`

/** @category Strings */
export const ProductIsMissingString = () => `the product is missing`

/** @category Strings */
export const ProductAlreadyExistsString = () => `the product already exists`

/** @category Strings */
export const TargetNotSupportedString = (target: string) => `the target is not supported`

/** @category Strings */
export const StackTargetScriptIsMissingString = (target: string, name: string) => `the required ${target}/${name} stack script is missing`

/** @category Strings */
export const ProductAppIsMissingString = (target: string) => `the required product ${target} app is missing`

/** @category Strings */
export const ProductIsNotReadyString = () => `the product is not ready yet`

/** @category Strings */
export const ChunksAreMissingString = () => `the product does not have any chunks`

/** @category Strings */
export const CommandDoesNotExistString = (name: string) => `the ${name} command does not exist`;

/** @category Strings */
export const CommandAlreadyExistsString = (name: string) => `the ${name} command already exists`;

/** @category Strings */
export const CommandCannotExecuteString = (name: string, reason: string) => `the ${name} command could not execute because ${reason}`;

/** @category Strings */
export const PluginCannotLoadString = (name: string, reason: string) => `the ${name} plugin cannot load because ${reason}`;

/** @category Strings */
export const ProductCannotLoadString = (reason: string) => `the product cannot load because ${reason}`;

/** @category Strings */
export const ProductCannotCreateString = (reason: string) => `the product could not be created because ${reason}`;

/** @category Strings */
export const CannotTakeSnapshotString = (reason?: string) => `a product snapshot could not be taken${reason && ' because ' + reason}`;

/** @category Strings */
export const StackIsMissingString = (name: string) => `the ${name} stack is missing`;

/** @category Strings */
export const TemplateIsMissingString = (name: string) => `the ${name} template is missing`;

/** @category Strings */
export const StackCannotLoadString = (name: string, reason: string) => `the ${name} stack cannot load because ${reason}`;