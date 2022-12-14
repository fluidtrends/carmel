import { useState, useEffect } from 'react';
import debug from 'debug'
import { create } from 'ipfs-core'
import { Session } from '@carmel/core'
import { libp2pConfig } from '../config'
import { createLibp2p } from 'libp2p'

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

export const useCarmelNet = () => {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (isInitialized) return

      isInitialized = true

      const ses = new Session({})
      const relays = await ses.chain._fetchRelays()

      const libp2p = libp2pBundle(relays)

      const node: any = await create({
          repo: 'ipfs',
          libp2p
      })

      await ses.start(node)

      setSession(ses)
    })()
  }, [])

  return { isInitialized, session }
}