import { send } from './main'
import { carmel } from './commands'
import * as system from '../system'
import path from 'path'
import fs from 'fs'

export const unlockVault = async (credentials: any) => {
    const result = await carmel({ cmd: 'data', args: [{
            name: "unlock",
            value: true
        }, {
            name: "password",
            value: credentials.password
        }]
    })

    const { stderr } = result
        
    if (stderr) {
        await send({ 
            id: credentials.id,
            type: 'vaultUnlockError',
            error: stderr
        })
        return
    }

    await send({ 
        id: credentials.id,
        type: 'vaultUnlocked', 
    })
}

export const updateSecret = async (credentials: any) => {
    const result = await carmel({ cmd: 'data', args: [{
            name: "save",
            value: true
        }, {
            name: "secure",
            value: true
        }, {
            name: "key",
            value: credentials.key
        }, {
            name: "values",
            value: credentials.values
        }]
    })

    const { stderr } = result
    
    if (stderr) {
        await send({ 
            id: credentials.id,
            type: 'updateSecretError',
            error: stderr
        })
        return
    }

    await send({ 
        id: credentials.id,
        type: 'updateSecret', 
    })
}

export const getSecret = async (credentials: any) => {
    system.reload()
    const env = system.env()
    const isLocked = env.lock.exists

    if (isLocked) {
        await send({ 
            id: credentials.id,
            type: 'getSecret',
            error: 'Vault is locked'
        })
        return 
    }

    try  {
        const vaultFile = path.resolve(env.home.path, 'secrets', '.data', 'index.json')
        const vaultData = JSON.parse(fs.readFileSync(vaultFile, 'utf-8'))

        await send({ 
            id: credentials.id,
            values: vaultData[credentials.key], 
        })
    
    } catch (e) {
        await send({ 
            id: credentials.id,
            type: 'updateSecretError',
            error: e.message
        })
    }
}

export const lockVault = async (credentials: any) => {
    const result = await carmel({ cmd: 'data', args: [{
            name: "lock",
            value: true
        }, {
            name: "password",
            value: credentials.password
        }]
    })

    const { stderr } = result
        
    if (stderr) {
        await send({ 
            id: credentials.id,
            type: 'vaultLockError',
            error: stderr
        })
        return
    }

    await send({ 
        id: credentials.id,
        type: 'vaultLocked', 
    })
}