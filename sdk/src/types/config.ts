export type ChunkConfigRoute = {
    screen: string
    path: string
    name: string
}

export type ChunkConfig = {
    name: string
    routes?: ChunkConfigRoute[]
}
