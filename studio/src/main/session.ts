import * as system from './system'
import fs from 'fs'
import path from 'path'
import extend from 'deep-extend'

const sessionFile = 'carmel.json'

export const exists = () => {
    return system.env().home.exists && fs.existsSync(path.resolve(system.env().home.path, sessionFile))
}

export const load = () => {
    if (!exists()) return
    return JSON.parse(fs.readFileSync(path.resolve(system.env().home.path, sessionFile), 'utf8'))
}


export const create = () => {
    if (exists()) return
    
    fs.writeFileSync(path.resolve(system.env().home.path, sessionFile), JSON.stringify({
        createdTimestamp: Date.now(),
        modifiedTimestamp: Date.now()
    }, null, 2), 'utf8')
}

export const update = (data: any) => {
    if (!exists()) return
    const now = load()
    const updated = JSON.stringify(extend(now, data), null, 2)

    fs.writeFileSync(path.resolve(system.env().home.path, sessionFile), updated, 'utf8')
}

