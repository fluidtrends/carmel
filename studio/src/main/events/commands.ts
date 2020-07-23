import * as system from '../system'
import fs from 'fs'
import path from 'path'
import proc from 'child_process'
import { send } from './main'

export const runCommand = async(data: any) => {
    const env = system.env()
    const nodeRoot = path.resolve(env.cache.path, 'node', 'default')
    const cwd = data.productId ? path.resolve(env.home.path, 'products', data.productId) : env.home.path

    const nodeBin = path.resolve(nodeRoot, 'bin', 'node')
    const carmelBin = path.resolve('bin', 'cli.js')

    const exe = proc.spawn(nodeBin, [carmelBin, data.commandId, ...(data.args || [])], { 
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