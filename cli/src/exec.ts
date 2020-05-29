import fs from 'fs'
import path from 'path'

import {
    Command
} from '.'

import {
    logError,
    logInfo,
    npmCli,
    resolveAll
} from 'nodu'

import npmInstall from 'nodu/lib/commands/install'

function parseCommand(input: any): Command {
    const raw = Object.assign({}, input)
    const id = raw._.shift()
    delete raw.$0
    delete raw._
    const cls = (id.charAt(0).toUpperCase() + id.substring(1)) as string

    return Object.assign({}, 
        { id, cls },
        raw
    ) as Command
}

function init() {
    const userRoot = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
    const carmelRoot = path.resolve(userRoot!, '.carmel')
    const carmelCacheRoot = path.resolve(carmelRoot!, 'cache')

    fs.existsSync(carmelRoot) || fs.mkdirSync(carmelRoot)
    fs.existsSync(carmelCacheRoot) || fs.mkdirSync(carmelCacheRoot)
    
    process.env.CARMEL_USER_HOME = userRoot
    process.env.CARMEL_HOME = carmelRoot
    process.env.CARMEL_CACHE_ROOT = carmelCacheRoot 
    
    resolveAll()
}

async function runCarmelCommand(command: any, sdkPath: string) {
    const tsMode = process.env.CARMEL_MODE && process.env.CARMEL_MODE === 'ts'
    const Carmel = require(path.resolve(sdkPath, tsMode ? 'src' : 'lib'))
    
    const Command = (Carmel.Commands as any)[command.cls]        
    const cmd = new Command(command)
    
    return Carmel.Engine.run(cmd)
}

export async function installCarmelSDK() {
    const carmelSDKPath = path.resolve(process.env.CARMEL_CACHE_ROOT!, "@carmel", "sdk", "default")

    if (fs.existsSync(carmelSDKPath)) {
        return carmelSDKPath
    }

    const installed = await npmInstall({
        module: `@carmel/sdk`,
        to: process.env.CARMEL_CACHE_ROOT 
    })

    fs.symlinkSync(installed!.to, carmelSDKPath, 'dir')

    return carmelSDKPath
}

export default async (input?: any) => {
    try {
        init()

        const sdkPath = await installCarmelSDK()
        const command = parseCommand(input)
        await runCarmelCommand(command, sdkPath)
    } catch (e) {
        logError(e)
    }
}