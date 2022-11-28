import { Station } from '.'
import debug from 'debug'

let LOG = debug("carmel:channel")

export class Channel {

    public static PREFIX = "#carmel:channel"
    public static SYSTEM_ID = "sys"
    public static SYSTEM_MAIN_ID = "sys:main"
    public static SYSTEM_OPERATORS_ID = "sys:ops"
    public static ACCEPT_EVENT_ID = "accept"
    public static RESPONSE_EVENT = "response"
    public static RESPONSE_ALL_EVENT = "responseAll"
    public static REQUEST_EVENT = "request"
    
    public static EVENT = {
        OPERATOR_ACCEPT: Channel.Id(Channel.SYSTEM_OPERATORS_ID, Channel.ACCEPT_EVENT_ID, Channel.REQUEST_EVENT)
    } 

    private _id: string 
    private _station: Station 
    private _onEvent: any
    private _sendQueue: any
    private _isOpen: boolean
    private _config: any 
    private _events: any
    private _registerEvent: any
    private _listenForEvent: any
    private _eventHandler: any

    constructor(id: string, config: any, station: Station) {
       this._id = id 
       LOG = debug(`carmel:channel:${id}`)
       this._isOpen = false
       this._station = station
       this._config = config || {}
       this._events = this.config.events || {}
       this._onEvent = this.onEvent.bind(this)
       this._registerEvent = this.registerEvent.bind(this)
       this._listenForEvent = this.listenForEvent.bind(this)
       this._eventHandler = this.eventHandler.bind(this)
       this._sendQueue = []
    }

    public static Id (id: string, event: string, type: string) {
        return `${Channel.PREFIX}:${id}:${event}@${type}`
    }

    get events () {
       return this._events
    }

    get config() {
        return this._config
    }

    get isOpen () {
        return this._isOpen
    }

    get id () {
        return this._id
    }

    get station () {
        return this._station
    }

    get sendQueue() {
        return this._sendQueue
    }

    async flush () {
        this._sendQueue = await this.station.session.cache.get("session/sendqueue") || []

        if (this.sendQueue.length === 0) return 

        LOG(`flushing send queue [events=${this.sendQueue.length}]`)

        await Promise.all(this.sendQueue.map((m: any) => this.sendEvent(m.id, m.data)))

        this._sendQueue = []
        await this.station.session.cache.put("session/sendqueue", [])

        LOG(`send queue completely flushed`)
    }

    eventHandler(id: string) {        
        if (!this.events || !this.events[id]) {
            return 
        } 
        
        if (!this.station.session.functions || !this.station.session.functions[this.events[id]] ) {
            return 
        }

        return this.station.session.functions[this.events[id]] 
    }

    async onEvent (id: string, data: any, type: string, from: string) {
        const log = debug(`carmel:event:${this.id}:${id}`)
        log(`<- received [${id}] event (${type})`)

        const handler = this._eventHandler(id)

        if (!handler) {
            log(`   [ skipped ] unrecognized event`)
            return 
        } 

        try {
            if (type === Channel.REQUEST_EVENT && handler[type]) {
                const result = await handler[type]({ log, session: this.station.session, channel: this, id, data, from })
                log(`   processed:`, result)
                
                if (data.sender && data.sender.id) {
                    const response = await this.sendEvent(`${id}`, result, `${Channel.RESPONSE_EVENT}:${data.sender.id}`)
                    log(`   response:`, response)
                }
            } else if (type === Channel.RESPONSE_EVENT && handler[type]) {
                const result = await handler[type]({ log, session: this.station.session, channel: this, id, data, from })
                log(`   processed:`, result)
            }
        } catch (e: any) {
            log(`   Error:`, e)
        }
    }

    async queueEvent(e: any) {
        this._sendQueue = await this.station.session.cache.get("session/sendqueue") || []
        this.sendQueue.push(e)
        await this.station.session.cache.put("session/sendqueue", this.sendQueue)
    }        

    async sendEvent (id: string, data: any, type: string = Channel.REQUEST_EVENT) {
        if (!id || !this.events[id]) return 

        if (!this.station.session.isConnected) {
            LOG(`-> delaying sending [${id}] event until connection is established`)
            await this.queueEvent({ id, data })
            return { message: "event queued" }
        }

        this.station.session.gateway.ipfs.pubsub.publish(`${Channel.PREFIX}:${this.id}:${id}@${type}`, JSON.stringify({
            ...data,
            sender: { 
                id: this.station.session.id,
            }
        }))

        LOG(`-> sent [${id}] event`)

        return { message: "event sent" }
    }

    async listenForEvent (id: string, type: string, log: any) {
        log(`registered [${type}] handler`)

        this.station.session.gateway.ipfs.pubsub.subscribe(`${Channel.PREFIX}:${this.id}:${id}@${type}${type === 'response' ? ':' + this.station.session.id : ''}`, (message: any) => {
            try {
                const { from, data } = message
                const e = data.toString()
                if (from === this.station.session.gateway.cid) return 
                
                this._onEvent(id, JSON.parse(e), type, from)
            } catch (err: any) {}
        })
    }

    async registerEvent (id: string) {
       if (!id || !this.events[id]) return 

       const log = debug(`carmel:event:${this.id}:${id}`)
       LOG(`adding [${id}] event ...`)

       if (id === Channel.ACCEPT_EVENT_ID) {
             this._listenForEvent(id, "request", log)
             LOG(`added [${id}] event`)           
            return
       }

       const handler: any = this.eventHandler(id)

       if (!handler) {
           LOG(`   [ skipped ] no handler found`)
           return 
       } 

       Object.keys(handler).map((h: string) => this._listenForEvent(id, h, log))

       LOG(`added [${id}] event`)
    }

    async addEvent(id: string, f: string) {
        this._events[id] = f
        await this.registerEvent(id)
    }

    async open() {
        LOG(`opening channel ...`)
        
        await Promise.all(Object.keys(this.events).map(this._registerEvent)) 
        this._isOpen = true 

        LOG(`channel ready`)
    }

    async close() {
        LOG(`closing channel ...`)

        this._isOpen = false 
        
        LOG(`channel closed`)
    }
}