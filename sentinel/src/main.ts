import debug from 'debug'
import path from 'path'
import { create } from 'ipfs-core'
import fs from 'fs-extra'
import { createLibp2p } from 'libp2p'
import { nanoid } from 'nanoid'
import { Session } from '@carmel/core'
import { tcp } from '@libp2p/tcp'
import { webSockets } from '@libp2p/websockets'
import { webRTCStar } from '@libp2p/webrtc-star'
import { webRTCDirect } from '@libp2p/webrtc-direct'
import { kadDHT } from '@libp2p/kad-dht'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'
import { bootstrap } from '@libp2p/bootstrap'
import { mdns } from '@libp2p/mdns'
import { noise } from '@chainsafe/libp2p-noise'
import { yamux } from '@chainsafe/libp2p-yamux'
import { mplex } from '@libp2p/mplex'
import * as werift from 'werift'

const wrtc: any = werift
const LOG = debug("carmel:sentinel")
const star = webRTCStar({ wrtc })

const libp2pBundle = (opts: any) => {
    const peerId = opts.peerId
    const bootstrapList = opts.config.Bootstrap
    
    return createLibp2p({
      peerId,
      addresses: {
        listen: ['/dns4/net.carmel.dev/tcp/443/wss/p2p-webrtc-star', '/ip4/127.0.0.1/tcp/0']
      },
      transports: [
        tcp(),
        star.transport,
        webSockets(),
        webRTCDirect(),
      ],
      streamMuxers: [
        yamux(),
        mplex()
      ],
      connectionEncryption: [
        noise()
      ],
      peerDiscovery: [
        bootstrap({ list: [...bootstrapList] }),
        mdns(),
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

export const start = async (isOperator = true) => {
    LOG('Starting...')
    const ROOTDIR = `${process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']}/.carmel/mesh-${isOperator ? 'full': 'light'}/`

    fs.existsSync(ROOTDIR) || fs.mkdirpSync(ROOTDIR)
    
    const repoDir = path.join(ROOTDIR, `repo-${isOperator ? 'full': 'light'}-${nanoid()}`)
    const revision = process.env.REV

    const cwd = process.cwd()
    const baseConfig = JSON.parse(fs.readFileSync(path.join(cwd, `config.${isOperator ? 'full': 'light'}.json`), 'utf-8'))

    const ses = new Session({
        ...baseConfig, isOperator, revision, root: ROOTDIR
    })    

    const node = await create({
        repo: repoDir,
        libp2p: libp2pBundle
    })

    await ses.start(node)

    LOG('Started')
}