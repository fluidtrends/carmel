import { Session, Channel } from '.'
import debug from 'debug'
import deepmerge from 'deepmerge'

const LOG = debug("carmel:station")

export class Station {
    
    private _session: Session
    private _channels: { [id: string]: any }
    private _openChannel: any
    private _closeChannel: any

    constructor(session: Session) {
        this._session = session
        this._channels = this.session.config.channels || {}
        this._openChannel = this.openChannel.bind(this)
        this._closeChannel = this.closeChannel.bind(this)
    }

    get session () {
        return this._session
    }

    get channels () {
        return this._channels
    }

    channel (id: string) {
        return this.channels[id]
    }

    async flush() {
        await Promise.all(Object.values(this.channels).map((channel: Channel) => channel.flush && channel.flush()))
    }

    async openChannel(id: string) {
        if (this.channels[id] && this.channels[id].isOpen) return this.channels[id]

        LOG(`opening [${id}] channel ...`)

        const channel = new Channel(id, this.channels[id], this)
        await channel.open()

        this.channels[id] = channel

        LOG(`channel [${id}] ready`)

        return this.channels[id]
    }

    async closeChannel(id: string) {
        if (!this.channels[id]) return

        LOG(`closing [${id}] channel ...`)

        if (this.channels[id].close) {
            await this.channels[id].close()
        }

        this.channels[id] = undefined
        delete this.channels[id]

        LOG(`channel [${id}] is ready`)
    }

    async addChannel(id: string, data: any) {
        if (this.channels[id]) return this.channels[id]

        this.channels[id] = { ...data }
        
        return this.openChannel(id)
    }

    async start () {
        LOG("starting the station ...")

        if (this.session.config.isOperator) {
            this.channels[Channel.SYSTEM_OPERATORS_ID] = this.channels[Channel.SYSTEM_OPERATORS_ID] || {}
            this.channels[Channel.SYSTEM_OPERATORS_ID].events = this.channels[Channel.SYSTEM_OPERATORS_ID].events || {}
            this.channels[Channel.SYSTEM_OPERATORS_ID].events[Channel.ACCEPT_EVENT_ID] = true 
        }

        await Promise.all(Object.keys(this.channels).map(this._openChannel))

        LOG("started the station")
    }

    async stop () {
        LOG("stopping the station ...")

        await Promise.all(Object.keys(this.channels).map(this._closeChannel))

        LOG("stopped the station")
    }    
}