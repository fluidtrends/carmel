export const ipfsConfig = (Swarm: string[], repo: string) => {
    return {
        start: true,
        init: true,
        repo,
        EXPERIMENTAL: {
            pubsub: true
        },
        relay: {
            enabled: true,
            hop: {
                enabled: true
            }
        },
        config: {       
            Addresses: {
                Swarm
            }
        }
    } as any
}    