const chunky = require('react-cloud-chunky')
const blockchain = require('react-blockchain-chunky/lib')

const filename = __filename
const auth = { limit: 1, private: true }

const _claim = () => {
  return ({ tokens: 100, period: 'airdrop2' })
}

const getWallet = (userId) => {
  return chunky.firebase.operation('retrieve', { key: `users-wallets/${userId}` })
          .then((index) => {
            delete index._id && delete index.timestamp && delete index.timestamp1
            const walletId = Object.keys(index)[0]
            return chunky.firebase.operation('retrieve', { key: `wallets/${walletId}` })
          })
}

const findClaim = (address) => {
  return chunky.firebase.operation('retrieve', { key: `claims/${address}` })
         .then((claim) => {
           if (!Array.isArray(claim) && (claim.period === _claim().period)) {
             throw new Error('You have already claimed your free tokens for this claim period.')
           }
           return claim
         })
}

const updateWallet = ({ claim, account }) => {
  return getWallet(account.user.uid)
      .then((wallet) => wallet && chunky.firebase.operation('update', {
        key: `wallets/${wallet._id}`,
        claimed: (wallet.claimed + claim.tokens)
      })
      .then(() => chunky.firebase.operation('update', { key: `users-wallets/${account.user.uid}/${wallet._id}`, timestamp: Date.now() })))
}

const createClaim = ({ account, config, data }) => {
  var claim = Object.assign({}, {
    node: 'claims',
    id: data.ethAddress,
    status: 'unverified'
  }, data, _claim(), {
    userId: account.user.uid,
    join: {
      users: {
        id: account.user.uid
      }
    }
  })

  return chunky.firebase.operation('add', claim)
        .then((claim) => updateWallet({ claim, account }))
}

const verifyClaim = ({ data, config }) => {
  return new Promise((resolve, reject) => {
    try {
      const eth = new blockchain.Ethereum(Object.assign({}, config.settings.ethereum, { account: data.ethAddress }))
      const eos = eth.eos
      resolve({ eth, eos })
      // return eth.eos.getBalance()
      //           .then((eosBalance) => {
      //             if (parseInt(eosBalance) === 0) {
      //               reject(new Error('You need to have an EOS stake'))
      //               return
      //             }
      //             return ({ eosBalance })
      //           })
      //           .catch((e) => {
      //             reject(e)
      //             // reject(new Error('Please enter a valid Ethereum Address'))
      //           })
    } catch (e) {
      reject(e)
      // reject(new Error('Please enter a valid Ethereum Address'))
    }
  })
}

function executor ({ event, chunk, config, account }) {
  return verifyClaim({ data: event.body, config })
         // .then(() => findClaim(event.body.ethAddress))
         // .then((claim) => createClaim({ account, config, data: event.body }))
}

module.exports.main = chunky.handler({ executor, filename, auth })
