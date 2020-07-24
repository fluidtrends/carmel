import * as system from '../system'
import path from 'path'
import { spawn } from 'child_process'
import { send } from './main'
import execa from 'execa'

export const carmel = async(data: any) => {
    const nodeVersion = data.node
    const carmelSDKVersion = data.sdk

    const env = system.env()
    const cli = path.resolve('bin', 'cli.js')
    const nodeHome = path.resolve(env.cache.path, 'node', nodeVersion, 'node')
    const cwd = data.cwd || env.home.path
    const args = [data.cmd, JSON.stringify(data.args)]

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
    const env = system.env()
    const nodeHome = path.resolve(env.cache.path, 'node', '12.18.3', 'node')
    const cwd = data.cwd || env.home.path
    const args = data.cmd.split(' ')
    const cmd: string = args.shift()

    const exe = path.resolve(nodeHome, 'bin', 'node')
    const exeArgs = [path.resolve(nodeHome, 'bin', cmd)].concat(cmd === 'npm' ? ['--prefix', nodeHome, ...args] : args)

    try {
        return await execa(exe, exeArgs, { cwd })
    } catch (error) {
        return error
    }
}

export const runCommand = async(data: any) => {
    const env = system.env()
    const nodeRoot = path.resolve(env.home.path, 'archive', 'node', 'default')
    const cwd = data.productId ? path.resolve(env.home.path, 'products', data.productId) : env.home.path

    const nodeBin = path.resolve(nodeRoot, 'bin', 'node')
    const carmelBin = path.resolve('bin', 'cli.js')

    const exe = spawn(nodeBin, [carmelBin, data.commandId, ...(data.args || [])], { 
        stdio: [ 'pipe', 'pipe', 'pipe', 'ipc' ],
        cwd 
    })

    exe.on('message', async (message) => {
        await send({ 
            type: 'commandResult', 
            id: data.id,
            message
        }) 
    })

    const result: any = await new Promise((resolve, reject) => {
        let stdout = ""
        let stderr = ""
    
        exe.stdout.on('data', async (data) => {
            stdout = `${stdout}${data}`   
            console.log("stdout", stdout)
        })

        exe.stderr.on('data', async (data) => {
            stderr = `${stderr} - error: ${data}`  
            console.log("stderr", stderr)
        })

        exe.on('close', (code) => {
            resolve({ stderr, stdout, code })
        })
    })
    
    await send({ 
        type: 'commandResult', 
        id: data.id,
        message: { ...result, done: true, status: 'Done.' }
    }) 
} 