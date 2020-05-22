import fs from 'fs'
import path from 'path'
import * as pacote from 'pacote'

import {
    Command,
    log,
    system,
    npm
} from '.'

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
    const carmelSDKRoot = path.resolve(carmelRoot!, 'sdk')
    const carmelSDKExists = fs.existsSync(carmelSDKRoot)

    fs.existsSync(carmelRoot) || fs.mkdirSync(carmelRoot)
    
    return Object.assign({}, {
        userRoot,
        carmelRoot,
        carmelSDKRoot,
        carmelSDKExists
    }, npm.env)
}

export default async function exec (input: any, done?: () => void) {
    try {
        const env = init()

        if (!env.npmExists) {
            throw new Error('Could not find npm')
        }

        if (!env.carmelSDKExists) {
            const manifest = await pacote.manifest('@carmel/sdk')
            const mod = await pacote.extract(`@carmel/sdk`, env.carmelSDKRoot, {})

            process.chdir(env.carmelSDKRoot)

            await system.run(env.npmExec, ['i'], {
                start: `Installing the Carmel SDK ... (hold on, this could take a while)`,
                done: `Carmel SDK installed successfully`
            })
        }

        const command = parseCommand(input)
        const Carmel = require(env.carmelSDKRoot)        

        const Command = (Carmel.Commands as any)[command.cls]        
        const cmd = new Command(command)

        const session = new Carmel.Session({ dir: env.carmelRoot })

        await Carmel.Commander.run(cmd, session)
    } catch (e) {
        log.error(e)
    }

    done && done()
}