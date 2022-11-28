export const libp2pConfig: any = () => {
    const WebRTCStar = require('libp2p-webrtc-star')
    const wrtc = require('werift')
    const transportKey = WebRTCStar.prototype[Symbol.toStringTag]

    const libp2p = require('ipfs-core/src/runtime/libp2p-nodejs')()

    libp2p.modules.transport.push(WebRTCStar)
    libp2p.config = {
        transport: {
            [transportKey]: { wrtc }
        }
    }

    return libp2p
}

export const ipfsConfig: any = (Swarm: string[], repo: string, ports: number[] = [4002, 4003, 5002, 5003, 9090]) => {
    process.env.IPFS_PATH = repo
    
    return {
        ipfsModule: require('ipfs'),
        remote: false,
        ipfsHttpModule: require('ipfs-http-client'),
        ipfsBin: require.resolve('ipfs/src/cli.js'),
        type: 'proc',
        ipfsOptions: {
            repo,
            libp2p: libp2pConfig(),
            config: {
                Addresses: {
                    Swarm: [
                      `/ip4/0.0.0.0/tcp/${ports[0]}`,
                      `/ip4/127.0.0.1/tcp/${ports[1]}/ws`
                    ].concat(Swarm),
                    API: `/ip4/127.0.0.1/tcp/${ports[2]}`,
                    RPC: `/ip4/127.0.0.1/tcp/${ports[3]}`,
                    Gateway: `/ip4/127.0.0.1/tcp/${ports[4]}`
                }
            }
        }
    }
}