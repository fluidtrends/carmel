import { useState, useEffect } from 'react';
import debug from 'debug'
import { create } from 'ipfs-core'
import { createLibp2p } from 'libp2p'
import { Session } from '@carmel/core'
import { webRTCStar } from '@libp2p/webrtc-star'
import { kadDHT } from '@libp2p/kad-dht'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'
import { bootstrap } from '@libp2p/bootstrap'
import { noise } from '@chainsafe/libp2p-noise'
import { yamux } from '@chainsafe/libp2p-yamux'
import { mplex } from '@libp2p/mplex'

const LOG = debug("carmel:web")
const star = webRTCStar()

debug.enable("carmel*")

const libp2pBundle = (opts: any) => {
    const peerId = opts.peerId
    const bootstrapList = opts.config.Bootstrap
    
    return createLibp2p({
      peerId,
      addresses: {
        listen: ['/dns4/net.carmel.dev/tcp/443/wss/p2p-webrtc-star']
      },
      transports: [
        star.transport
      ],
      streamMuxers: [
        yamux(),
        mplex()
      ],
      connectionEncryption: [
        noise()
      ],
      peerDiscovery: [
        bootstrap({ list: [
          ...bootstrapList
        ] }),
        star.discovery
      ],
      dht: kadDHT(),
      pubsub: gossipsub(),
      relay: {
        enabled: true,
        hop: {
          enabled: true,
          active: true
        }
      }
    })
}

let isInitialized = false

export const useCarmel = () => {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (isInitialized) return

      isInitialized = true

      LOG("Starting...")

      const ses = new Session({})

      const node = await create({
          repo: `${ses.cache.root}/ipfs-main`,
          libp2p: libp2pBundle
      })
        
      await ses.start(node)

      LOG("Started")    
      setSession(ses)
    })()
  }, [])

  return { isInitialized, session }
}