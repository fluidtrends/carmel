import { send } from './main'
import { carmel } from './commands'

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