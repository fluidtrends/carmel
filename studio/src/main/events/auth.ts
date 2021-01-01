import { send, _loadUser } from './main'
import { carmel } from './commands'
import * as system from '../system'

import { eos } from '../services/blockchain'

/////

const _doLogin = async (credentials: any) => {
    const now = Date.now()

    // Get the user data
    const user = await _loadUser({ username: credentials.username })

    // Save credentials
    const result = await carmel({ cmd: 'data', args: [{
            name: "save",
            value: true
        }, {
            name: "secure",
            value: true
        }, {
            name: "key",
            value: "_auth"
        }, {
            name: "values",
            value: JSON.stringify({
                privateKey: credentials.privateKey,
                publicKey: credentials.publicKey
            })
        }, {
            name: "password",
            value: credentials.password
        }]
    })
    
    if (result.stderr) {
        throw Error('Login failed')
    }

    // Save user data
    system.update({ loadedTimestamp: now, user })

    return user
}

/////

export const register = async (credentials: any) => {
    system.reload()
    const env: any = system.env()

    // Create the user
    await eos.system.call("newuser", {
        account: credentials.account,
        username: credentials.username,
        fullname: credentials.fullname || credentials.username,
        machine_id: env.machine.id,
        details: "{}",
    }, credentials.privateKey)

    if (credentials.plan.requiredTokens > 0) {
        // Make a payment
        const total = (parseFloat(credentials.plan.requiredTokens) / 10000).toFixed(4)
        
        await eos.tokens.call("transfer", {
            from: credentials.account.id,
            to: "carmelsystem",
            quantity: `${total} CARMEL`,
            memo: `${credentials.username}:${credentials.plan.id}:1`
        })
    }

    // Log the user in
    const user = await _doLogin(credentials)

    await send({ 
        id: credentials.id,
        type: 'registerSuccess',
        user,
        session: system.session,
        env
    })
}

export const login = async (credentials: any) => {
    system.reload()
    const env: any = system.env()

    // Get the user data
    const user = await _doLogin(credentials)

    await send({ 
        id: credentials.id,
        type: 'loginSuccess',
        user,
        session: system.session,
        env
    })
}

export const listPlans = async (data: any) => {
    const plans = await eos.read("carmelsystem", "carmelsystem", "plans")

    if (!plans || !plans.rows || plans.rows.length === 0) {
        throw new Error("Plans not found")
    }

    const settings = await eos.read("carmelsystem", "carmelsystem", "settings")

    if (!settings || !settings.rows || settings.rows.length === 0) {
        throw new Error("Settings not found")
    }

    await send({ 
        id: data.id,
        type: 'plansList',
        plans: plans.rows,
        settings: settings.rows
    })
}

export const checkEOSKey = async (data: any) => {
    const key = await eos.checkKey(data)

    await send({ 
        id: data.id,
        type: 'checkEOSKey',
        ...key
    })
}

export const findUser = async (data: any) => {
    const result = await eos.read("carmelsystem", "carmelsystem", "users", ["name", "secondary", data.username])
    
    if (!result || !result.rows || result.rows.length === 0) {
        await send({ 
            id: data.id,
            username: data.username,
            type: 'findUser'
        })
        return     
    }

    await send({ 
        id: data.id,
        type: 'findUser',
        username: data.username,
        user: result.rows[0]
    })
}