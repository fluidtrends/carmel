import { useState, useEffect } from 'react';
import { Session } from '@carmel/core';
import debug from 'debug'
import { create } from 'ipfs-core'
import { ipfsConfig } from '../config/ipfs'

debug.enable("carmel*")

const LOG = debug("carmel:react")
let isInitialized = false

export const useCarmel = () => {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (isInitialized) return

      isInitialized = true

      LOG("initializing")
    
      const ses = new Session({});
      const relays = await ses.chain.fetch.relays()
      const config = ipfsConfig(relays, `${ses.cache.root}/ipfs`)

      const node: any = await create(config)
      await ses.start(node)

      LOG("initialized")    
      setSession(ses)
    })()
  }, [])

  return { isInitialized, session }
}