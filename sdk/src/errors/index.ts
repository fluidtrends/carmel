import { Strings } from '..'

/** @category Errors */
export const FileDoesNotExist = (file: string): Error => new Error(Strings.FileDoesNotExistString(file))

/** @category Errors */
export const FileCouldNotBeLoaded = (file: string, reason: string): Error => new Error(Strings.FileCouldNotBeLoadedString(file, reason))

/** @category Errors */
export const DirDoesNotExist = (dir: string): Error => new Error(Strings.DirDoesNotExistString(dir))

/** @category Errors */
export const ArgumentIsMissing = (arg: string): Error => new Error(Strings.ArgumentIsMissingString(arg))

/** @category Errors */
export const ProductAlreadyExists = (): Error => new Error(Strings.ProductAlreadyExistsString())

/** @category Errors */
export const SessionIsMissing = (): Error => new Error(Strings.SessionIsMissingString())

/** @category Errors */
export const CommandIsMissing = (): Error => new Error(Strings.CommandIsMissingString())

/** @category Errors */
export const CommandDoesNotExist = (name: string): Error => new Error(Strings.CommandDoesNotExistString(name))

/** @category Errors */
export const CommandAlreadyExists = (name: string): Error => new Error(Strings.CommandAlreadyExistsString(name))

/** @category Errors */
export const CommandCannotExecute = (name: string, reason: string): Error => new Error(Strings.CommandCannotExecuteString(name, reason))

/** @category Errors */
export const PluginCannotLoad = (name: string, reason: string): Error => new Error(Strings.PluginCannotLoadString(name, reason))

/** @category Errors */
export const ProductCannotLoad = (reason: string): Error => new Error(Strings.ProductCannotLoadString(reason))

/** @category Errors */
export const StackCannotLoad = (name: string, reason: string): Error => new Error(Strings.StackCannotLoadString(name, reason))
