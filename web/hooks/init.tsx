import { useState, useEffect } from 'react';
// import { Session } from '@carmel/core/lib/';
import debug from 'debug'
// import { IPFS, create } from 'ipfs-core'

debug.enable("carmel*")

const LOG = debug("carmel:web")

let ipfs: any = null

// const IPFS_BROWSER_CONFIG: any = (Swarm: string[], repo: string) => {
//   return {
//       start: true,
//       init: true,
//       repo,
//       EXPERIMENTAL: {
//           pubsub: true
//       },
//       relay: {
//           enabled: true,
//           hop: {
//               enabled: true
//           }
//       },
//       config: {       
//           Addresses: {
//               Swarm
//           }
//       }
//   } as any
// }    

// const RELAYS = [{
//     type: "webrtc-star",
//     url: "net.carmel.dev",
//     port: 443
// }].filter((s: any) => s.type === 'webrtc-star').map((s: any) => `/dns4/${s.url}/tcp/${s.port || 443}/wss/p2p-webrtc-star`)

let _ = {
    start: false
}

export const useInit = () => {
    const [id, setId] = useState(null);
    const [ipfs, setIpfs] = useState(null);
    const [version, setVersion] = useState(null);
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        const init = async () => {
            if (ipfs) return
            const repo = `carmel-${Math.random()}/ipfs`
            // const config = IPFS_BROWSER_CONFIG(RELAYS, repo)
            // const node: any = await create(config);

            // const nodeId = await node.id();
            // const nodeVersion = await node.version();
            // const nodeIsOnline = node.isOnline();
            // const ses = new Session({})      
            // await ses.start(node)

            // setIpfs(node);
            // setId(nodeId.id);
            // setVersion(nodeVersion.version);
            // setIsOnline(nodeIsOnline);
        }

        init()
    }, [ipfs]);

    // const [initializing, setInitializing] = useState(false)

    // useEffect(() => {
    //    if (_.start) {
    //     return 
    //    }

    //    _.start = true
    //    start()
    // }, [initializing])

    // async function start () {
    //   const repo = `carmel-${Math.random()}/ipfs`
    //   LOG(`Initializing ${repo}} ${_.start}`)
    //   const config = {}//IPFS_BROWSER_CONFIG(RELAYS, repo)
    //   const node = await create(config);

    //   // const ses = new Session({})      
    //     //   ses.start(node)

    //   LOG("initialized")      
    // }

    return { ipfs }
}



