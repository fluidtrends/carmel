import * as system from '../system'
import path from 'path'
import { app } from 'electron'
import { script } from '../assets'
import { spawn } from 'child_process'
import { send } from './main'
import execa from 'execa'
import fs from 'fs'

export const carmel = async(data: any) => {  
    system.reload()

    const env = system.env()
    const cli = script('cli.js')
    const session = system.session

    const nodeVersion = data.node || session.node.default
    const carmelSDKVersion = data.sdk || session.sdk.default

    const nodeHome = path.resolve(env.cache.path, 'node', nodeVersion, 'node')
    const cwd = data.cwd || env.home.path
    const args = [data.cmd].concat(data.args && data.args.length > 0 ? [JSON.stringify(data.args)] : [])
 
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
    const env = system.env()
    const session = system.session

    const sdk = data.node || session.sdk.versions[0]
    const node = data.sdk || session.node.versions[0]

    const cwd = data.productId ? path.resolve(env.home.path, 'products', data.productId) : env.home.path
    const manifest = data.productId ? JSON.parse(fs.readFileSync(path.resolve(cwd, '.carmel.json'), 'utf8')) : undefined

    await send({ 
        id: data.id, 
        type: 'commandResult', 
        status: data.progress || 'Working ...'
    })

    const result = await carmel({ 
        node, sdk,
        cmd: data.cmd,
        args: data.args || [],
        cwd 
    })

    if (data.productId && data.cmd === 'start') {
        await new Promise((done) => {
            const timer = setInterval(async () => {
                const newManifest = JSON.parse(fs.readFileSync(path.resolve(cwd, '.carmel.json'), 'utf8'))
                if (!newManifest.started) return 
                clearInterval(timer)
                done()
            }, 2000)
        })
    }

    await send({ 
        id: data.id, 
        type: 'commandResult', 
        ...result,
        status: 'Done',
        done: true,
    })
} 