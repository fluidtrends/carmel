import { Strings } from '..'

export const FileDoesNotExist = (file: string): Error => new Error(Strings.FileDoesNotExist(file))
export const FileCouldNotBeLoaded = (file: string, reason: string): Error => new Error(Strings.FileCouldNotBeLoaded(file, reason))
export const DirDoesNotExist = (dir: string): Error => new Error(Strings.DirDoesNotExist(dir))
