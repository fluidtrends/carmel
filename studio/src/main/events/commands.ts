import * as system from '../system'
import path from 'path'
import { app } from 'electron'
import { script } from '../assets'
import { spawn } from 'child_process'
import { send } from './main'
import execa from 'execa'

export const carmel = async(data: any) => {
    const nodeVersion = data.node
    const carmelSDKVersion = data.sdk

    const env = system.env()
    const cli = script('cli.js')
    const nodeHome = path.resolve(env.cache.path, 'node', nodeVersion, 'node')
    const cwd = data.cwd || env.home.path
    const args = [data.cmd].concat(data.args ? [JSON.stringify(data.args)] : [])

    const exe = path.resolve(nodeHome, 'bin', 'node')

    try {
        return await execa(exe, [cli, ...args], { 
            cwd, 
            extendEnv: true,
            env: {
                CARMEL_HOME: env.home.path,
                CARMEL_SDK_HOME: path.resolve(
                    env.cache.path,
                    '@carmel',
                    'sdk',
                    carmelSDKVersion,
                    '@carmel',
                    'sdk'
                  )
            } 
        })
    } catch (error) {
        return error
    }
}

export const shell = async(data: any) => {
    const now = Date.now()
    const env = system.env()
    const nodeHome = path.resolve(env.cache.path, 'node', '12.18.3', 'node')
    const cwd = data.cwd || env.home.path
    const args = data.cmd.split(' ')
    const cmd: string = args.shift()

    const exe = path.resolve(nodeHome, 'bin', 'node')
    const exeArgs = [path.resolve(nodeHome, 'bin', cmd)].concat(cmd === 'npm' ? ['--prefix', nodeHome, ...args] : args)
        
    try {
        const result = await execa(exe, exeArgs, { 
            cwd,
        })
        return {
            ...result,
            time: ((Date.now() - now) / 1000)
        }
    } catch (error) {
        return {
            error,
            time: ((Date.now() - now) / 1000)
        }
    }
}

export const runCommand = async(data: any) => {
    const node = data.node || '12.18.3'
    const sdk = data.sdk || '1.10.2'

    const env = system.env()
    const cwd = data.productId ? path.resolve(env.home.path, 'products', data.productId) : env.home.path
    
    await send({ 
        id: data.id, 
        type: 'commandResult', 
        status: data.progress || 'Working ...'
    })

    const result = await carmel({
        ...data,
        cwd,
        node,
        sdk
    })

    await send({ 
        id: data.id, 
        type: 'commandResult', 
        done: true,
        status: 'Done',
        ...result
    })
} 