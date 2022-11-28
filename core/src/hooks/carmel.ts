import { useState, useEffect } from 'react';
import { Session } from '../Session';
import debug from 'debug'
import { create } from 'ipfs-core'
import { ipfsConfig } from '../config/ipfs'

debug.enable("carmel*")

const LOG = debug("carmel:react")

let ipfs: any = null

export const useCarmel = () => {
    useEffect(() => {
       start()
    }, [])

    async function start () {
      LOG("initializing")
      
      const ses = new Session({});
      const relays = await ses.chain.fetch.relays()
      const config = ipfsConfig(relays, `${ses.cache.root}/ipfs`)
      const node = await create(config)
      await ses.start(node)

      LOG("initialized")      
    }

    return { ipfs }
}



