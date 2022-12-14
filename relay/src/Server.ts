import path from 'path'
import debug from 'debug'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import http from 'http'
import { Pipe, Swarm } from '.'
import { Cluster } from 'ioredis'
import { createHttpTerminator, HttpTerminator } from 'http-terminator'
import type { WebRTCStarSocket } from '@libp2p/webrtc-star-protocol'

const PORT = process.env.PORT || 9080
const REDIS_HOST = process.env.REDIS_SERVICE_HOST || 'localhost'
const REDIS_PORT = process.env.REDIS_SERVICE_PORT || "30001"
const VERSION = process.env.IMAGE_VERSION || "latest"
const LOG = debug('carmel:relay:server')
const DIR = path.dirname(__dirname)

LOG(`version: ${VERSION}`)
LOG(`redis host: ${REDIS_HOST}`)
LOG(`redis port: ${REDIS_PORT}`)

export class Server {
    private _app: any 
    private _terminator?: HttpTerminator
    private _http?: http.Server
    private _io?: any[]
    private _pipe?: Pipe[]
    private _pub?: Cluster
    private _sub?: Cluster
    private _db?: Cluster
    private _adapter?: any
    private _adapterNext?: any
    private _swarm: Swarm

    constructor() {
        this._swarm = new Swarm(this)
    }

    get swarm() { 
        return this._swarm
    }

    get pipe () {
        return this._pipe
    }

    get terminator() {
        return this._terminator
    }

    get sub () {
        return this._sub
    }

    get pub () {
        return this._pub
    }

    get adapter () {
        return this._adapter
    }

    get adapterNext () {
        return this._adapterNext
    }

    get io () {
       return this._io
    }

    get app() {
        return this._app
    }

    get http() {
        return this._http
    }

    connect(io: any, pipe: any) { 
        LOG(`connecting`)
        io.on('connection', (socket: WebRTCStarSocket) => {
            LOG('new connection')
            socket.on('ss-join', pipe.join.bind(pipe, socket))
            socket.on('ss-leave', pipe.leave.bind(pipe, socket))
            socket.on('disconnect', pipe.disconnect.bind(pipe, socket))
            socket.on('ss-handshake', pipe.handshake.bind(pipe, socket))
        })
    }

    async stop() {
        this.terminator?.terminate()
    }

    async start() {
        const sio = require('socket.io')
        const sioNext = require('socket.io-next')

        const sior = require('socket.io-redis')
        const siorNext = require('socket.io-redis-next')

        this._app = express()
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(cookieParser())
        this.app.use(express.static(path.resolve(DIR, 'public')))

        this._http = http.createServer({}, this.app)

        this._pub = new Cluster([{ port: parseInt(REDIS_PORT), host: REDIS_HOST }])
        this._sub = new Cluster([{ port: parseInt(REDIS_PORT), host: REDIS_HOST }])
        this._adapter = sior({ pubClient: this.pub, subClient: this.sub })
        this._adapterNext = siorNext.createAdapter({ pubClient: this.pub, subClient: this.sub })

        this._io = [
            new sio(this.http, {                 
                path: '/socket.io', 
                adapter: this.adapter!, 
                transports: ['websocket']  
            }), 
            sioNext(this.http, { 
                path: '/socket.io-next/', 
                adapter: this.adapterNext!, 
                transports: ['websocket']  
            })
        ]

        await this.swarm.start()

        this._pipe = [new Pipe(this, 0), new Pipe(this, 1)]
        this.io!.map((io: any, i: number) => this.connect(io, this.pipe![i]))

        this.app.get("/status", async (req: any, res: any) => {
            const status = await this.swarm.status()
            return res.json(status)
        })

        const server = this.http!.listen(PORT, () => {
            LOG(`started server on port ${PORT}`)
        })

        this._terminator = createHttpTerminator({ server })
    }
}