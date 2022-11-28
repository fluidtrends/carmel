"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Station = void 0;
const _1 = require(".");
const debug_1 = __importDefault(require("debug"));
const LOG = (0, debug_1.default)("carmel:station");
class Station {
    constructor(session) {
        this._session = session;
        this._channels = this.session.config.channels || {};
        this._openChannel = this.openChannel.bind(this);
        this._closeChannel = this.closeChannel.bind(this);
    }
    get session() {
        return this._session;
    }
    get channels() {
        return this._channels;
    }
    channel(id) {
        return this.channels[id];
    }
    async flush() {
        await Promise.all(Object.values(this.channels).map((channel) => channel.flush && channel.flush()));
    }
    async openChannel(id) {
        if (this.channels[id] && this.channels[id].isOpen)
            return this.channels[id];
        LOG(`opening [${id}] channel ...`);
        const channel = new _1.Channel(id, this.channels[id], this);
        await channel.open();
        this.channels[id] = channel;
        LOG(`channel [${id}] ready`);
        return this.channels[id];
    }
    async closeChannel(id) {
        if (!this.channels[id])
            return;
        LOG(`closing [${id}] channel ...`);
        if (this.channels[id].close) {
            await this.channels[id].close();
        }
        this.channels[id] = undefined;
        delete this.channels[id];
        LOG(`channel [${id}] is ready`);
    }
    async addChannel(id, data) {
        if (this.channels[id])
            return this.channels[id];
        this.channels[id] = Object.assign({}, data);
        return this.openChannel(id);
    }
    async start() {
        LOG("starting the station ...");
        if (this.session.config.isOperator) {
            this.channels[_1.Channel.SYSTEM_OPERATORS_ID] = this.channels[_1.Channel.SYSTEM_OPERATORS_ID] || {};
            this.channels[_1.Channel.SYSTEM_OPERATORS_ID].events = this.channels[_1.Channel.SYSTEM_OPERATORS_ID].events || {};
            this.channels[_1.Channel.SYSTEM_OPERATORS_ID].events[_1.Channel.ACCEPT_EVENT_ID] = true;
        }
        await Promise.all(Object.keys(this.channels).map(this._openChannel));
        LOG("started the station");
    }
    async stop() {
        LOG("stopping the station ...");
        await Promise.all(Object.keys(this.channels).map(this._closeChannel));
        LOG("stopped the station");
    }
}
exports.Station = Station;
//# sourceMappingURL=Station.js.map