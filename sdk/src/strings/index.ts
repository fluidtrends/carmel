export const FileDoesNotExist = (file: string) => `The ${file} file does not exit`;
export const FileCouldNotBeLoaded = (file: string, reason: string) => `The ${file} could not be loaded because ${reason}`;
export const DirDoesNotExist = (dir: string) => `The ${dir} directory does not exist`;
export const ArgumentIsMissing = (arg: string) => `The ${arg} argument is missing`
export const CommandDoesNotExist = (name: string) => `The ${name} command does not exist`;
export const CommandAlreadyExists = (name: string) => `The ${name} command already exists`;
export const CommandCannotExecute = (name: string, reason: string) => `The ${name} command could not execute because ${reason}`;