import { webRTCStar } from '@libp2p/webrtc-star'
import { kadDHT } from '@libp2p/kad-dht'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'
import { noise } from '@chainsafe/libp2p-noise'
import { yamux } from '@chainsafe/libp2p-yamux'
import { mplex } from '@libp2p/mplex'
import { webSockets } from '@libp2p/websockets'

export const libp2pConfig = () => {
    const star = webRTCStar()
 
    const transports = [star.transport, webSockets()]
    const peerDiscovery = [star.discovery]

    return {
      transports,
      streamMuxers: [
        yamux(),
        mplex()
      ],
      connectionEncryption: [
        noise()
      ],
      peerDiscovery,
      nat: {
        enabled: true,
        keepAlive: true
      },
      dht: kadDHT(),
      pubsub: gossipsub(),
      connectionManager: {
        autoDial: true,
        autoDialInterval: 5000,
      },
      relay: {
        enabled: true,
        hop: {
          enabled: true,
          active: true
        },
        autoRelay: {
          enabled: true,
          maxListeners: 1
        }
      }
    }
}
