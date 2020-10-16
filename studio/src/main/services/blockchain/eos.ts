import fetch from 'node-fetch'
import { Api, JsonRpc } from 'eosjs'
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig'
import fs from 'fs-extra'
import path from 'path'
import * as sys from '../../system'

const CARMEL_SYSTEM = 'carmelsystem'
const NET_URL = 'http://0.0.0.0:8888' // 'http://api.eosn.io'

export const credentials = (environment?: any) => {
    let env = environment 

    if (!env) {
        sys.reload()
        env = sys.env() 
    }

    if (env.lock.exists) {
        throw new Error('The vault is locked')
    }

    if (!sys.session.user) {
        throw new Error('The user is not signed in')
    }

    try {
        const file = path.resolve(env.home.path, 'secrets', '.data', 'index.json')
        const secrets: any = JSON.parse(fs.readFileSync(file, 'utf8'))
        return secrets
    } catch {
        throw new Error('The credentials could not be loaded')
    }
}

export const read = async (contract: string, scope: string, table: string, index?: any) => {
    const rpc = new JsonRpc(NET_URL, { fetch })
    
    return await rpc.get_table_rows(Object.assign({}, {
        json: true,              
        code: contract,     
        scope,
        table,       
        limit: 100,
        reverse: false, 
        show_payer: false
    }, index && {
        key_type: index[0],
        index_position: index[1],
        upper_bound: index[2],
        lower_bound: index.length > 3 ? index[3] : index[2]
    }))
}

export const action = (contract: string, name: string, data: any) => {
    const { account } = data
    
    return {
        account: contract,
        name,
        authorization: [{
          actor: account,
          permission: 'active',
        }],
        data
    }
}


export const call = async (contract: string, name: string, data: any) => {    
    const { user } = credentials()

    if (!user) {
        throw new Error('User credentials missing')
    }

    const actions = [action(contract, name, data)]

    const rpc = new JsonRpc(NET_URL, { fetch })
    const signatureProvider = new JsSignatureProvider([user.privateKey])
    const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() })
    
    console.log(contract, name, data)
    
    const result = await api.transact({ actions }, {
        blocksBehind: 3,
        expireSeconds: 30,
    })

    console.log(result)

    if (!result.transaction_id || !result.processed || 
        !result.processed.receipt || !result.processed.receipt.status || 
        result.processed.receipt.status !== 'executed') {
            throw new Error('Call did not succeed')
    }
}

export const system = async (name: string, data: any) => {
   return call(CARMEL_SYSTEM, name, data)
}