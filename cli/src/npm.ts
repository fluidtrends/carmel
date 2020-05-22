import path from 'path'
import fs from 'fs'
import nopt from 'nopt'

export const env = init()

export function existsGlobal(id: string) : boolean {
    return fs.existsSync(path.resolve(env.nodeGlobalModulesRoot, id))
}

function init () {
    const nodeExec = path.resolve(process.execPath)
    const nodeBin = path.dirname(nodeExec)
    const nodeRoot = path.dirname(nodeBin)
    const nodeLib = path.resolve(nodeRoot, 'lib')
    const nodeGlobalModulesRoot = path.resolve(nodeLib, 'node_modules')

    const npmRoot = path.resolve(nodeGlobalModulesRoot, 'npm')
    const npmExec = path.resolve(nodeBin, 'npm')
    const npmExists = fs.existsSync(npmRoot)

    return {
        nodeExec,
        nodeBin,
        nodeRoot,
        nodeGlobalModulesRoot,
        nodeLib,
        npmRoot,
        npmExec,
        npmExists
    }
}

export async function run(cmd: string) : Promise<string> {
    return new Promise((resolve, reject) => {

        if (!env.npmExists) {
            reject(new Error('Could not find npm'))
            return
        }

        let output = ''
        // const stdout = process.stdout.write
        // const stderr = process.stderr.write
    
        const original = cmd.split(' ').map(s => s.trim())
        process.argv = process.argv.slice(0,2).concat(original)
 
        const npm = require(`${env.npmRoot}/lib/npm.js`)
        const npmconf = require(`${env.npmRoot}/lib/config/core.js`)

        const configDefs = npmconf.defs
        const shorthands = configDefs.shorthands
        const types = configDefs.types
        const conf = nopt(types, shorthands)

        npm.argv = conf.argv.remain
        npm.command = npm.argv.shift()
        
        conf._exit = false

        // process.stdout.write = (msg: string) => {
        //     output = output + msg
        //     return true
        // }

        npm.load(conf, (er: TypeError) => {
            if (er) {
                // process.stdout.write = stdout
                // process.stderr.write = stderr
                reject(er)
                return
            }
            // npm.config.set('loglevel', 'silent')
            npm.commands[npm.command](npm.argv, (err: TypeError) => {
                if (err) {
                    // process.stdout.write = stdout
                    // process.stderr.write = stderr
                    reject(err)
                    return
                }
                // process.stdout.write = stdout
                // process.stderr.write = stderr
                resolve(output.trim())
            })
        })    
    })
}
