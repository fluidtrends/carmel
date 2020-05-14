import { Strings } from '..'

export const FileDoesNotExist = (file: string): Error => new Error(Strings.FileDoesNotExist(file))
export const FileCouldNotBeLoaded = (file: string, reason: string): Error => new Error(Strings.FileCouldNotBeLoaded(file, reason))
export const DirDoesNotExist = (dir: string): Error => new Error(Strings.DirDoesNotExist(dir))
export const ArgumentIsMissing = (arg: string): Error => new Error(Strings.ArgumentIsMissing(arg))
export const CommandDoesNotExist = (name: string): Error => new Error(Strings.CommandDoesNotExist(name))
export const CommandAlreadyExists = (name: string): Error => new Error(Strings.CommandAlreadyExists(name))
export const CommandCannotExecute = (name: string, reason: string): Error => new Error(Strings.CommandCannotExecute(name, reason))
