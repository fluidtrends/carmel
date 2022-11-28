import { useState, useEffect } from 'react';
// import { Session } from '@carmel/core';
import debug from 'debug'
import { IPFS, create } from 'ipfs-core'

debug.enable("carmel*")

const LOG = debug("carmel:web")

let ipfs: any = null

const IPFS_BROWSER_CONFIG: any = (Swarm: string[], repo: string) => {
  return {
      start: true,
      init: true,
      repo,
      EXPERIMENTAL: {
          pubsub: true
      },
      relay: {
          enabled: true,
          hop: {
              enabled: true
          }
      },
      config: {       
          Addresses: {
              Swarm
          }
      }
  } as any
}    

export const useInit = () => {
    useEffect(() => {
       start()
    }, [])

    async function start () {
      LOG("initializing")
      const node = await create();
    //   const ipfs = require('ipfs')
    //   console.log(ipfs)
    //   const ses = new Session({});
    //   const relays = await ses.chain.fetch.relays()
    //   const config = IPFS_BROWSER_CONFIG(relays, `${ses.cache.root}/ipfs`)
    //   const _ipfs = await ipfs.create(config)
      LOG("initialized")      
    }

    return { ipfs }
}



