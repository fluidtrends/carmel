import { webRTCStar } from '@libp2p/webrtc-star'
import { kadDHT } from '@libp2p/kad-dht'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'
import { noise } from '@chainsafe/libp2p-noise'
import { yamux } from '@chainsafe/libp2p-yamux'
import { mplex } from '@libp2p/mplex'
import { webSockets } from '@libp2p/websockets'
import { bootstrap } from '@libp2p/bootstrap'

export const libp2pConfig = () => {
    const star = webRTCStar()
 
    const transports = [star.transport, webSockets()]
    const peerDiscovery = [star.discovery, bootstrap({
      list: [ // a list of bootstrap peer multiaddrs to connect to on node startup
        "/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
        "/dnsaddr/bootstrap.libp2p.io/ipfs/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN",
        "/dnsaddr/bootstrap.libp2p.io/ipfs/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa"
      ],
      timeout: 1000, // in ms,
      tagName: 'bootstrap',
      tagValue: 50,
      tagTTL: 120000 // in ms
    })]

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
