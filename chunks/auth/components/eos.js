import { Api, JsonRpc, RpcError } from 'eosjs'

// import ScatterJS from 'scatterjs-core'
// import ScatterEOS from 'scatterjs-plugin-eosjs'
// ScatterJS.plugins(new ScatterEOS())

const ENDPOINT = "https://nodes.get-scatter.com:443"

export default class EOS {
  constructor () {
    this._rpc = new JsonRpc(ENDPOINT, { fetch })
  }

  get rpc () {
    return this._rpc
  }

  getTokenBalance(username, symbol = "EOS", contract = "eosio.token") {
    return this.rpc.get_currency_balance(contract, username, symbol)
  }

  getEOSBalance(username) {
    return this.getTokenBalance(username)
  }

  getCARMELBalance(username) {
    return this.getTokenBalance(username, "CARMEL", "carmeltokens")
  }
}
