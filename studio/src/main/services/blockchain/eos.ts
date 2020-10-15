import fetch from 'node-fetch'
import { Api, JsonRpc } from 'eosjs'
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig'

const CARMEL_SYSTEM = 'carmelsystem'
const NET_URL = 'http://0.0.0.0:8888'
// const NET_URL = 'http://api.eosn.io'

export const api = (privateKey: string) => {
    const rpc = new JsonRpc(NET_URL, { fetch })
    const signatureProvider = new JsSignatureProvider([privateKey])
    return new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() })
}

export const read = async (contract: string, scope: string, table: string) => {
    const rpc = new JsonRpc(NET_URL, { fetch })

    return await rpc.get_table_rows({
        json: true,              
        code: contract,     
        scope,
        table,       
        limit: 100,
        reverse: false, 
        show_payer: false
    })
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

export const system = async (data: any) => {
    const { privateKey, name } = data
    const { transact } = api(privateKey)

    delete data.privateKey

    return await transact(action(CARMEL_SYSTEM, name, data), {
        blocksBehind: 3,
        expireSeconds: 30,
    })
}