import { app } from 'electron'
import path from 'path'
import { isDevMode } from './utils'

export const asset = (name: string) => isDevMode ? `assets/${name}` : path.resolve(process.resourcesPath, 'assets', name)
export const script = (name: string) => isDevMode ? path.resolve(__dirname, '..', '..', 'bin', name) : path.resolve(process.resourcesPath, 'bin', name)
