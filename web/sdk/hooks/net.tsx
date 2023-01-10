import { useState, useEffect } from 'react';
import debug from 'debug'
import { create } from 'ipfs-core'
import { Session, SESSION_STATUS } from '@carmel/core'
import { libp2pConfig, mainConfig } from '../config'
import { createLibp2p } from 'libp2p'
import * as functions from '../functions'

const LOG = debug("carmel:web")

debug.enable("carmel*")

const libp2pBundle = (relays: any) => (opts: any) => {
  const peerId = opts.peerId

  return createLibp2p({
    peerId,
    addresses: {
      listen: [...relays]
    },
    ...libp2pConfig()
  })
}

let isInitialized = false
const SYNC_SECONDS = 1

export const useCarmelNet = () => {
  const [session, setSession] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    (async () => {
      if (isInitialized) return

      isInitialized = true

      const ses = new Session({ ...mainConfig() })
      const relays = await ses.chain._fetchRelays()
      
      ses.registerFunctions(functions)

      const libp2p = libp2pBundle(relays)

      const node: any = await create({
          repo: 'ipfs',
          libp2p
      })

      await ses.start(node)
      
      setSession(ses)
    
      const tim = setInterval(() => {
        const connected = ses.status === SESSION_STATUS.CONNECTED
        if (connected != isConnected) setIsConnected(connected)
      }, SYNC_SECONDS * 1000)

      return () => {
        clearInterval(tim)
      }
    })()
  }, [])

  return { isInitialized, session, isConnected }
}