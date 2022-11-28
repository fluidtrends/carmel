"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const debug_1 = __importDefault(require("debug"));
let LOG = (0, debug_1.default)("carmel:channel");
class Channel {
    constructor(id, config, station) {
        this._id = id;
        LOG = (0, debug_1.default)(`carmel:channel:${id}`);
        this._isOpen = false;
        this._station = station;
        this._config = config || {};
        this._events = this.config.events || {};
        this._onEvent = this.onEvent.bind(this);
        this._registerEvent = this.registerEvent.bind(this);
        this._listenForEvent = this.listenForEvent.bind(this);
        this._eventHandler = this.eventHandler.bind(this);
        this._sendQueue = [];
    }
    static Id(id, event, type) {
        return `${Channel.PREFIX}:${id}:${event}@${type}`;
    }
    get events() {
        return this._events;
    }
    get config() {
        return this._config;
    }
    get isOpen() {
        return this._isOpen;
    }
    get id() {
        return this._id;
    }
    get station() {
        return this._station;
    }
    get sendQueue() {
        return this._sendQueue;
    }
    async flush() {
        this._sendQueue = await this.station.session.cache.get("session/sendqueue") || [];
        if (this.sendQueue.length === 0)
            return;
        LOG(`flushing send queue [events=${this.sendQueue.length}]`);
        await Promise.all(this.sendQueue.map((m) => this.sendEvent(m.id, m.data)));
        this._sendQueue = [];
        await this.station.session.cache.put("session/sendqueue", []);
        LOG(`send queue completely flushed`);
    }
    eventHandler(id) {
        if (!this.events || !this.events[id]) {
            return;
        }
        if (!this.station.session.functions || !this.station.session.functions[this.events[id]]) {
            return;
        }
        return this.station.session.functions[this.events[id]];
    }
    async onEvent(id, data, type, from) {
        const log = (0, debug_1.default)(`carmel:event:${this.id}:${id}`);
        log(`<- received [${id}] event (${type})`);
        const handler = this._eventHandler(id);
        if (!handler) {
            log(`   [ skipped ] unrecognized event`);
            return;
        }
        try {
            if (type === Channel.REQUEST_EVENT && handler[type]) {
                const result = await handler[type]({ log, session: this.station.session, channel: this, id, data, from });
                log(`   processed:`, result);
                if (data.sender && data.sender.id) {
                    const response = await this.sendEvent(`${id}`, result, `${Channel.RESPONSE_EVENT}:${data.sender.id}`);
                    log(`   response:`, response);
                }
            }
            else if (type === Channel.RESPONSE_EVENT && handler[type]) {
                const result = await handler[type]({ log, session: this.station.session, channel: this, id, data, from });
                log(`   processed:`, result);
            }
        }
        catch (e) {
            log(`   Error:`, e);
        }
    }
    async queueEvent(e) {
        this._sendQueue = await this.station.session.cache.get("session/sendqueue") || [];
        this.sendQueue.push(e);
        await this.station.session.cache.put("session/sendqueue", this.sendQueue);
    }
    async sendEvent(id, data, type = Channel.REQUEST_EVENT) {
        if (!id || !this.events[id])
            return;
        if (!this.station.session.isConnected) {
            LOG(`-> delaying sending [${id}] event until connection is established`);
            await this.queueEvent({ id, data });
            return { message: "event queued" };
        }
        this.station.session.gateway.ipfs.pubsub.publish(`${Channel.PREFIX}:${this.id}:${id}@${type}`, JSON.stringify(Object.assign(Object.assign({}, data), { sender: {
                id: this.station.session.id,
            } })));
        LOG(`-> sent [${id}] event`);
        return { message: "event sent" };
    }
    async listenForEvent(id, type, log) {
        log(`registered [${type}] handler`);
        this.station.session.gateway.ipfs.pubsub.subscribe(`${Channel.PREFIX}:${this.id}:${id}@${type}${type === 'response' ? ':' + this.station.session.id : ''}`, (message) => {
            try {
                const { from, data } = message;
                const e = data.toString();
                if (from === this.station.session.gateway.cid)
                    return;
                this._onEvent(id, JSON.parse(e), type, from);
            }
            catch (err) { }
        });
    }
    async registerEvent(id) {
        if (!id || !this.events[id])
            return;
        const log = (0, debug_1.default)(`carmel:event:${this.id}:${id}`);
        LOG(`adding [${id}] event ...`);
        if (id === Channel.ACCEPT_EVENT_ID) {
            this._listenForEvent(id, "request", log);
            LOG(`added [${id}] event`);
            return;
        }
        const handler = this.eventHandler(id);
        if (!handler) {
            LOG(`   [ skipped ] no handler found`);
            return;
        }
        Object.keys(handler).map((h) => this._listenForEvent(id, h, log));
        LOG(`added [${id}] event`);
    }
    async addEvent(id, f) {
        this._events[id] = f;
        await this.registerEvent(id);
    }
    async open() {
        LOG(`opening channel ...`);
        await Promise.all(Object.keys(this.events).map(this._registerEvent));
        this._isOpen = true;
        LOG(`channel ready`);
    }
    async close() {
        LOG(`closing channel ...`);
        this._isOpen = false;
        LOG(`channel closed`);
    }
}
exports.Channel = Channel;
Channel.PREFIX = "#carmel:channel";
Channel.SYSTEM_ID = "sys";
Channel.SYSTEM_MAIN_ID = "sys:main";
Channel.SYSTEM_OPERATORS_ID = "sys:ops";
Channel.ACCEPT_EVENT_ID = "accept";
Channel.RESPONSE_EVENT = "response";
Channel.RESPONSE_ALL_EVENT = "responseAll";
Channel.REQUEST_EVENT = "request";
Channel.EVENT = {
    OPERATOR_ACCEPT: Channel.Id(Channel.SYSTEM_OPERATORS_ID, Channel.ACCEPT_EVENT_ID, Channel.REQUEST_EVENT)
};
//# sourceMappingURL=Channel.js.map