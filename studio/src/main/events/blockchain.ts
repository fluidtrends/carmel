import { send } from './main'
import { carmel } from './commands'
import * as system from '../system'
import * as window from '../window'
import fs, { existsSync } from 'fs-extra'
import path from 'path'
import readdir from "recursive-readdir"

import { ipcRenderer } from 'electron'
import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import shortid from 'shortid'
import axios from 'axios'

import fetch from 'node-fetch'
import { Api, JsonRpc, RpcError } from 'eosjs'
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig'

// const rpc = new JsonRpc('http://api.eosn.io', { fetch })

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

export const startChallenge = async (data: any) => {
    system.reload()

    // const result = await eos.transact({
    //     actions: [{
    //       account: 'carmelsystem',
    //       name: 'trychallenge',
    //       authorization: [{
    //         actor: data.eosAcccount,
    //         permission: 'active',
    //       }],
    //       data: {
    //           account: data.eosAcccount,
    //           user: data.username,
    //           challenge_name: data.challengeName
    //       },
    //     }]
    // }, {
    //     blocksBehind: 3,
    //     expireSeconds: 30,
    // })
    
    console.log("data", data)
    console.log("session", system.session)
}

export const syncProfile = async (data: any) => {
    console.log("!!!!", data)
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
                    ...user,
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

        system.reload()
        const env = system.env()

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
                    ...user,
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

export const listChallenges = async (data: any) => {
    const env = system.env()
    const cwd = path.resolve(env.home.path, 'products', data.productId)
    const product: any = JSON.parse(fs.readFileSync(path.resolve(cwd, '.carmel.json'), 'utf8'))
    const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })

    const challengesRaw = await rpc.get_table_rows({
        json: true,              
        code: 'carmelsystem',     
        scope: 'carmelsystem',
        table: 'challenges',       
        limit: 100,
        reverse: false, 
        show_payer: false
    })

    const challenges = challengesRaw.rows.map((c: any) => ({
        ...c,
        details: JSON.parse(c.details || {}),
        skills: (c.skills || []).map((s: string) => s.split(" "))
    }))

    await send({ 
        id: data.id,
        type: 'challengesList',
        challenges
    })
}

export const loadChallenge = async (data: any) => {
    const env = system.env()

    const cwd = path.resolve(env.home.path, 'challenges', data.challengeId)
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