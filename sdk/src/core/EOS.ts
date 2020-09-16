// import { Api, JsonRpc, RpcError } from 'eosjs'
// const { JsonRpc } = require('eosjs');

// const eos = new JsonRpc('http://api.eosn.io')
// const eos = new JsonRpc('http://0.0.0.0:8888')

// (async () => {
//     // const resp = await eos.get_table_rows({
//     //   json: true,              
//     //   code: 'eosio.token',     
//     //   scope: 'dancalinescu',
//     //   table: 'accounts',       
//     //   limit: 1             
//     // })

//     // const resp = await eos.get_table_rows({
//     //   json: true,              
//     //   code: 'eosio.token',     
//     //   scope: 'carmelmaster',
//     //   table: 'accounts',       
//     //   limit: 10,
//     //   reverse: false, 
//     //   show_payer: true
//     // })

//     const resp = await eos.get_currency_balance('eosio.token', 'alice', 'EOS')
//     const resp2 = await eos.get_currency_balance('carmeltokens', 'alice', 'CARMELD')

//     // const resp = await eos.get_currency_balance('eosio.token', 'dancalinescu', 'EOS')
//     // const resp = await eos.get_currency_balance('carmeltokens', 'dancalinescu', 'CARMEL')


//     // const resp = await eos.get_table_rows({
//     //   json: true,              
//     //   code: 'carmelsystem',     
//     //   scope: 'carmelsystem',
//     //   table: 'accounts',       
//     //   limit: 1             
//     // })

//     const resp3 = await eos.get_table_rows({
//       json: true,              
//       code: 'carmelsystem',        
//       scope: 'carmelsystem',    
//       table: 'quests',        
//       table_key: 'id',     
//       limit: 10             
//     })

//     const resp4 = await eos.get_table_rows({
//       json: true,              
//       code: 'carmelsystem',        
//       scope: 'alice',    
//       table: 'quests',        
//       table_key: 'id',     
//       limit: 10             
//     })

//     console.log("-", resp, resp2, resp3.rows, resp4.rows)
// })()