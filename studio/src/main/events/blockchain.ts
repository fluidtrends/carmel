import { send } from './main'
import { carmel } from './commands'
import * as system from '../system'
import path from 'path'
import fetch from 'node-fetch'
import { Api, JsonRpc } from 'eosjs'
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig'
import { _resolveChallenge } from './challenges'

// const rpc = new JsonRpc('http://api.eosn.io', { fetch })
// const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })

export const listPlans = async (data: any) => {
    const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })
    const plansRaw = await rpc.get_table_rows({
        json: true,              
        code: 'carmelsystem',     
        scope: 'carmelsystem',
        table: 'plans',       
        limit: 100,
        reverse: false, 
        show_payer: false
    })

    const settings = await rpc.get_table_rows({
        json: true,              
        code: 'carmelsystem',     
        scope: 'carmelsystem',
        table: 'settings',       
        limit: 100,
        reverse: false, 
        show_payer: false
    })

    const plans = plansRaw.rows.map((p: any) => ({
        ...p,
    }))

    await send({ 
        id: data.id,
        type: 'plansList',
        plans,
        settings: settings.rows
    })
}

export const syncProfile = async (data: any) => {
    const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })

    const carmel = await rpc.get_currency_balance("carmeltokens", data.user.account)
    const eos = await rpc.get_currency_balance("eosio.token", data.user.account)

    system.reload()
    const env = system.env()
    const isLocked = env.lock.exists

    await send({ 
        id: data.id,
        type: 'okProfile',
        user: data.user,
        isLocked,
        balance: {
            eos: eos[0] ? parseFloat(eos[0].split()[0]) : 0,
            carmel: carmel[0] ? parseFloat(carmel[0].split()[0]) : 0
        }
    })   
}

export const topup = async (credentials: any) => {

    let result = await carmel({ cmd: 'data', args: [{
            name: "read",
            value: true
        }, {
            name: "secure",
            value: true
        }, {
            name: "key",
            value: "user"
        }, {
            name: "password",
            value: credentials.password
        }]
    })

    console.log(result)

    // const { stderr } = result

    // const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })
    // const signatureProvider = new JsSignatureProvider([credentials.privateKey])
    // const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() })

    // const carmel = await rpc.get_currency_balance("carmeltokens", data.account)
    // const eos = await rpc.get_currency_balance("eosio.token", data.account)

    // result = await api.transact({
    //     actions: [{
    //         account: 'carmeltokens',
    //         name: 'transfer',
    //         authorization: [{
    //             actor: credentials.account.id,
    //             permission: 'active',
    //         }],
    //         data: {
    //             from: credentials.account.id,
    //             to: "carmelsystem",
    //             quantity: `${total} CARMEL`,
    //             memo: `${credentials.username}:${credentials.plan.id}:1`,
    //         },
    //     }]
    // }, {
    //     blocksBehind: 3,
    //     expireSeconds: 30,
    // })

    // paymentOk = (result.transaction_id  && result.processed && result.processed.receipt && 
    //              result.processed.receipt.status && result.processed.receipt.status === 'executed')


    // await send({ 
    //     id: data.id,
    //     type: 'okBalance',
    //     balance: {
    //         eos: eos[0] ? parseFloat(eos[0].split()[0]) : 0,
    //         carmel: carmel[0] ? parseFloat(carmel[0].split()[0]) : 0
    //     }
    // })   
}

export const checkEOSKey = async (data: any) => {
    try {
        const signatureProvider = new JsSignatureProvider([data.privateKey])

        const getAvailableKeys = await signatureProvider.getAvailableKeys()
        const publicKey = getAvailableKeys[0]

        const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })
        let result = await rpc.history_get_key_accounts(publicKey)

        if (!result || !result.account_names) {
            throw new Error('Invalid private key')
        }

        const { account_names } = result

        const balances: any = await Promise.all(account_names.map((a: string) => (
            rpc.get_currency_balance("carmeltokens", a)
        )))

        const accounts = account_names.map((id: string, i: number) => {
            const balance = balances[i][0] ? parseFloat(balances[i][0].split()[0]) : 0

            return {
                id, balance
            }
        })

        await send({ 
            id: data.id,
            type: 'okEOSKey',
            publicKey,
            accounts
        })

    } catch (e) {
        await send({ 
            id: data.id,
            type: 'invalidEOSKey',
            error: e.message
        })
    }
}

export const _getProgress = async (data: any) => {
    system.reload()
    const env: any = system.env()

    const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })
    const result = await rpc.get_table_rows({
        json: true,              
        code: 'carmelsystem',     
        scope: data.account,
        table: 'progress',       
        limit: 100,
        reverse: false,
        show_payer: false,
        key_type: 'name',
        index_position: 'secondary',
        upper_bound: data.username,
        lower_bound: data.username
    })

    if (!result || !result.rows || result.rows.length === 0) {
        throw new Error("No progress yet")
    }

    const challenges: any = result.rows.map((row: any) => {
        const challenge = {
            id: row.challenge_id,
            name: row.challenge_name,
            bundle: row.bundle_name,
            isCompleted: row.done,
            startTimestamp: row.started_timestamp,
            updatedTimestamp: row.updated_timestamp,
            challengeVersion: row.challenge_version,
            status: row.status, 
            taskIndex: row.task_index
        }

        const data = _resolveChallenge(env, challenge, challenge.challengeVersion)
        
        return data
    })

    if (!challenges || challenges.length === 0) {
        throw new Error("No progress yet")
    }

    return { challenges }
}

export const getProgress = async (data: any) => {
    try {
        const progress = await _getProgress(data)
        await send({ 
            id: data.id,
            type: "getProgress",
            progress
        })
    } catch (e) {
        await send({ 
            id: data.id,
            type: "getProgress",
            error: e.message
        })
    }
}

export const _addEffort = async (data: any) => {
    const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })
    const signatureProvider = new JsSignatureProvider([data.privateKey])
    const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() })

    const result = await api.transact({
        actions: [{
          account: 'carmelsystem',
          name: 'addeffort',
          authorization: [{
            actor: data.user.account,
            permission: 'active',
          }],
          data: {
              account: data.user.account,
              user: data.user.username,
              challenge_name: data.challenge.name,
              successful: data.details.ok ? true : false,
              results: JSON.stringify(data.details)
          },
        }] 
    }, {
        blocksBehind: 3,
        expireSeconds: 30,
    })

    return result
}

export const _tryChallenge = async (data: any) => {
    const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })
    const signatureProvider = new JsSignatureProvider([data.privateKey])
    const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() })
    
    const result = await api.transact({
        actions: [{
          account: 'carmelsystem',
          name: 'trychallenge',
          authorization: [{
            actor: data.user.account,
            permission: 'active',
          }],
          data: {
              account: data.user.account,
              user: data.user.username,
              challenge_name: data.challenge.name,
              challenge_version: data.challengeVersion,
              product_id: data.productId
          },
        }]
    }, {
        blocksBehind: 3,
        expireSeconds: 30,
    })

    return result
}

export const findUser = async (data: any) => {
    try {
        const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })
        const result = await rpc.get_table_rows({
            json: true,              
            code: 'carmelsystem',     
            scope: 'carmelsystem',
            table: 'users',       
            limit: 1,
            key_type: 'name',
            index_position: 'secondary',
            reverse: false, 
            show_payer: false,
            upper_bound: data.username,
            lower_bound: data.username
        })

        if (!result || !result.rows || result.rows.length === 0) {
            await send({ 
                id: data.id,
                username: data.username,
                type: 'userNotFound',
            })
            return 
        }

        await send({ 
            id: data.id,
            type: 'foundUserOk',
            username: data.username,
            user: result.rows[0]
        })

    } catch (e) {
        await send({ 
            id: data.id,
            type: 'foundUserError',
            error: e.message
        })
    }
}

export const register = async (credentials: any) => {
    const now = Date.now()
    system.reload()
    const env: any = system.env()

    try {
        const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })
        const signatureProvider = new JsSignatureProvider([credentials.privateKey])
        const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() })

        let result = await api.transact({
            actions: [{
                account: 'carmelsystem',
                name: 'newuser',
                authorization: [{
                    actor: credentials.account.id,
                    permission: 'active',
                }],
                data: {
                    account: credentials.account.id,
                    username: credentials.username,
                    fullname: credentials.fullname || credentials.username,
                    machine_id: env.machine.id,
                    details: "{}",
                },
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        })

        if (!result.transaction_id || !result.processed || !result.processed.receipt || 
            !result.processed.receipt.status || result.processed.receipt.status !== 'executed') {
            throw new Error('Registration failed')
        }

        let paymentOk = false

        if (credentials.plan.requiredTokens > 0) {
            const total = (parseFloat(credentials.plan.requiredTokens) / 10000).toFixed(4)
            
            result = await api.transact({
                actions: [{
                    account: 'carmeltokens',
                    name: 'transfer',
                    authorization: [{
                        actor: credentials.account.id,
                        permission: 'active',
                    }],
                    data: {
                        from: credentials.account.id,
                        to: "carmelsystem",
                        quantity: `${total} CARMEL`,
                        memo: `${credentials.username}:${credentials.plan.id}:1`,
                    },
                }]
            }, {
                blocksBehind: 3,
                expireSeconds: 30,
            })
    
            paymentOk = (result.transaction_id  && result.processed && result.processed.receipt && 
                         result.processed.receipt.status && result.processed.receipt.status === 'executed')
        }

        result = await rpc.get_table_rows({
            json: true,              
            code: 'carmelsystem',     
            scope: 'carmelsystem',
            table: 'users',       
            limit: 1,
            key_type: 'name',
            index_position: 'secondary',
            reverse: false, 
            show_payer: false,
            upper_bound: credentials.username,
            lower_bound: credentials.username
        })

        if (!result || !result.rows || result.rows.length === 0) {
           throw new Error("User not found")
        }

        const user = {
            ...result.rows[0],
            paymentOk
        }

        result = await carmel({ cmd: 'data', args: [{
                name: "save",
                value: true
            }, {
                name: "secure",
                value: true
            }, {
                name: "key",
                value: "user"
            }, {
                name: "values",
                value: {
                    privateKey: credentials.privateKey,
                    publicKey: credentials.publicKey
                }
            }, {
                name: "password",
                value: credentials.password
            }]
        })

        const { stderr } = result
        
        if (stderr) {
            await send({ 
                id: credentials.id,
                type: 'registerError',
                error: stderr
            })
            return
        }

        system.update({ 
            loadedTimestamp: now,
            user
        })

        await send({ 
            id: credentials.id,
            type: 'registerSuccess',
            user,
            session: system.session,
            env
        })
    } catch (e) {
        await send({ 
            id: credentials.id,
            type: 'registerError',
            error: e.message
        })
    }
}

export const login = async (credentials: any) => {
    const now = Date.now()

    try {
        const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })
        
        let result = await rpc.get_table_rows({
            json: true,              
            code: 'carmelsystem',     
            scope: 'carmelsystem',
            table: 'users',       
            limit: 1,
            key_type: 'name',
            index_position: 'secondary',
            reverse: false, 
            show_payer: false,
            upper_bound: credentials.username,
            lower_bound: credentials.username
        })

        if (!result || !result.rows || result.rows.length === 0) {
           throw new Error("User not found")
        }

        const user = {
            ...result.rows[0]
        }

        result = await carmel({ cmd: 'data', args: [{
                name: "save",
                value: true
            }, {
                name: "secure",
                value: true
            }, {
                name: "key",
                value: "user"
            }, {
                name: "values",
                value: {
                    privateKey: credentials.privateKey,
                    publicKey: credentials.publicKey
                }
            }, {
                name: "password",
                value: credentials.password
            }]
        })

        const { stderr } = result
        
        if (stderr) {
            await send({ 
                id: credentials.id,
                type: 'loginError',
                error: stderr
            })
            return
        }

        system.update({ 
            loadedTimestamp: now,
            user
        })

        system.reload()
        const env = system.env()

        await send({ 
            id: credentials.id,
            type: 'loginSuccess',
            user,
            session: system.session,
            env
        })
    } catch (e) {
        await send({ 
            id: credentials.id,
            type: 'loginError',
            error: e.message
        })
    }
}

// export const listChallenges = async (data: any) => {
//     const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })

//     const challengesRaw = await rpc.get_table_rows({
//         json: true,              
//         code: 'carmelsystem',     
//         scope: 'carmelsystem',
//         table: 'challenges',       
//         limit: 100,
//         reverse: false, 
//         show_payer: false
//     })

//     const challenges = challengesRaw.rows.map((c: any) => ({
//         ...c,
//         details: JSON.parse(c.details || {}),
//         skills: (c.skills || []).map((s: string) => s.split(" "))
//     }))

//     await send({ 
//         id: data.id,
//         type: 'challengesList',
//         challenges
//     })
// }

export const loadChallenge = async (data: any) => {
    const env = system.env()

    // const cwd = path.resolve(env.home.path, 'challenges', data.challengeId)
    // const file = path.resolve(cwd, data.path)
    // const content = fs.readFileSync(file, 'utf8')
    
    const challenge = {
        id: data.challengeId,
        title: "Hey there",
        totalTasks: 3
    }

    await send({ 
        id: data.id,
        type: 'challengeLoaded',
        challenge
    })
}

export const loadTask = async (data: any) => {
    const env = system.env()

    const cwd = path.resolve(env.home.path, 'challenges', data.challengeId)
    // const file = path.resolve(cwd, data.path)
    // const content = fs.readFileSync(file, 'utf8')
    
    const task = {
        index: data.taskIndex,
        challengeId: data.challengeId,
        title: "Task loaded"
    }

    const tutorial = "#ddddd hey task"

    await send({ 
        id: data.id,
        type: 'taskLoaded', 
        tutorial,
        task
    })
}