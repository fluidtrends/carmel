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

// const eos = new JsonRpc('http://api.eosn.io', { fetch })

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

export const checkEOSKey = async (data: any) => {
    try {
        const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig')
        const signatureProvider = new JsSignatureProvider([data.privateKey])

        const getAvailableKeys = await signatureProvider.getAvailableKeys()
        const publicKey = getAvailableKeys[0]

        const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })
        const result = await rpc.history_get_key_accounts(publicKey)

        if (!result || !result.account_names) {
            throw new Error('Invalid private key')
        }

        await send({ 
            id: data.id,
            type: 'okEOSKey',
            publicKey,
            accounts: result.account_names
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
        const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig')
        const signatureProvider = new JsSignatureProvider([credentials.privateKey])

        const rpc = new JsonRpc('http://0.0.0.0:8888', { fetch })
        const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() })

        const creds = {
            username: credentials.username,
            account: credentials.account,
            plan: credentials.plan,
            publicKey: credentials.publicKey
        }

        let result = await api.transact({
            actions: [{
                account: 'carmelsystem',
                name: 'newuser',
                authorization: [{
                    actor: credentials.account,
                    permission: 'active',
                }],
                data: {
                    account: credentials.account,
                    username: credentials.username,
                    plan: credentials.plan,
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
                    ...creds,
                    privateKey: credentials.privateKey
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
            user: creds
        })

        system.reload()
        const env = system.env()

        await send({ 
            id: credentials.id,
            type: 'registerSuccess',
            user: creds,
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