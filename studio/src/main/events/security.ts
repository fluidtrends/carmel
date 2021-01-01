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
            value: JSON.stringify(credentials.values, null, 2)
        }]
    })

    console.log(">>>", result)

    const { stderr } = result
    
    if (stderr) {
        await send({ 
            id: credentials.id,
            type: 'updateSecretError',
            error: stderr
        })
        return
    }

    return getAllSecrets(credentials)
}


export const addNewGroup = async (credentials: any) => {
    if (!credentials.name) {
        await send({ 
            id: credentials.id,
            type: 'addNewGroup',
            error: 'Name required'
        })
        return 
    }

    system.reload()
    const env = system.env()
    const isLocked = env.lock.exists

    if (isLocked) {
        await send({ 
            id: credentials.id,
            type: 'addNewGroup',
            error: 'Vault is locked'
        })
        return 
    }

    try  {
        const vaultFile = path.resolve(env.home.path, 'secrets', '.data', 'index.json')
        const secrets = JSON.parse(fs.readFileSync(vaultFile, 'utf-8'))

        if (secrets[credentials.name]) {
            await send({ 
                id: credentials.id,
                type: 'addNewGroup',
                error: 'Name already exists'
            })
            return 
        }

        const newSecrets = {
            ...secrets,
            [credentials.name]: {}
        }

        fs.writeFileSync(vaultFile, JSON.stringify(newSecrets, null, 2), 'utf-8')
        
        delete newSecrets.id
        delete newSecrets.name

        await send({ 
            id: credentials.id,
            type: 'addNewGroup',
            name: credentials.name,
            secrets: newSecrets, 
        })
    
    } catch (e) {
        await send({ 
            id: credentials.id,
            type: 'addNewGroup',
            error: e.message
        })
    }
}

export const getAllSecrets = async (credentials: any) => {
    system.reload()
    const env = system.env()
    const isLocked = env.lock.exists

    if (isLocked) {
        await send({ 
            id: credentials.id,
            type: 'getAllSecrets',
            error: 'Vault is locked'
        })
        return 
    }

    try  {
        const vaultFile = path.resolve(env.home.path, 'secrets', '.data', 'index.json')
        const secrets = JSON.parse(fs.readFileSync(vaultFile, 'utf-8'))

        delete secrets.id
        delete secrets.name
        delete secrets._auth
        
        await send({ 
            id: credentials.id,
            secrets, 
        })
    
    } catch (e) {
        await send({ 
            id: credentials.id,
            type: 'getAllSecrets',
            error: e.message
        })
    }
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
            type: 'getSecret',
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