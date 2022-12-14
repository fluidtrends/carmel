// import { webRTCStar } from '@libp2p/webrtc-star'
// import { kadDHT } from '@libp2p/kad-dht'
// import { gossipsub } from '@chainsafe/libp2p-gossipsub'
// import { noise } from '@chainsafe/libp2p-noise'
// import { yamux } from '@chainsafe/libp2p-yamux'
// import { mplex } from '@libp2p/mplex'
// import { webSockets } from '@libp2p/websockets'
export {};
// export const libp2pConfig = () => {
//     const star = webRTCStar()
//     const transports = [star.transport, webSockets()]
//     const peerDiscovery = [star.discovery]
//     return {
//       transports,
//       streamMuxers: [
//         yamux(),
//         mplex()
//       ],
//       connectionEncryption: [
//         noise()
//       ],
//       peerDiscovery,
//       nat: {
//         enabled: true,
//         keepAlive: true
//       },
//       dht: kadDHT(),
//       pubsub: gossipsub(),
//       connectionManager: {
//         autoDial: true,
//         autoDialInterval: 5000,
//       },
//       relay: {
//         enabled: true,
//         hop: {
//           enabled: true,
//           active: true
//         },
//         autoRelay: {
//           enabled: true,
//           maxListeners: 1
//         }
//       }
//     }
// }
// import { createLibp2p } from 'libp2p'
// import { webRTCStar } from '@libp2p/webrtc-star'
// import { kadDHT } from '@libp2p/kad-dht'
// import { gossipsub } from '@chainsafe/libp2p-gossipsub'
// import { bootstrap } from '@libp2p/bootstrap'
// import { noise } from '@chainsafe/libp2p-noise'
// import { yamux } from '@chainsafe/libp2p-yamux'
// import { mplex } from '@libp2p/mplex'
// import { webSockets } from '@libp2p/websockets'
// import { tcp } from '@libp2p/tcp'
// import { webRTCDirect } from '@libp2p/webrtc-direct'
// import { mdns } from '@libp2p/mdns'
// export const libp2pConfig = (relays: any, wrtc: any = undefined) => (opts: any) => {
//     const star = webRTCStar({ wrtc })
//     const peerId = opts.peerId
//     const bootstrapList = opts.config.Bootstrap
//     const isSentinel = wrtc
//     const transports = [star.transport, webSockets()]//, ...(isSentinel ? [tcp(), webRTCDirect()] : [])]
//     const peerDiscovery = [star.discovery]//, ...(isSentinel ? [mdns(), bootstrap({ list: [...bootstrapList] })] : [])]
//     const node = createLibp2p({
//       peerId,
//       addresses: {
//         listen: [...relays]
//       },
//       transports,
//       streamMuxers: [
//         yamux(),
//         mplex()
//       ],
//       connectionEncryption: [
//         noise()
//       ],
//       peerDiscovery,
//       nat: {
//         enabled: true,
//         keepAlive: true
//       },
//       dht: kadDHT(),
//       pubsub: gossipsub(),
//       connectionManager: {
//         autoDial: true,
//         autoDialInterval: 5000,
//       },
//       relay: {
//         enabled: true,
//         hop: {
//           enabled: true,
//           active: true
//         },
//         autoRelay: {
//           enabled: true,
//           maxListeners: 1
//         }
//       }
//     })
//     return node
// }
//# sourceMappingURL=Config.js.map