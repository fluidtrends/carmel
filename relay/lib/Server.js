"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const path_1 = __importDefault(require("path"));
const debug_1 = __importDefault(require("debug"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const _1 = require(".");
const ioredis_1 = require("ioredis");
const http_terminator_1 = require("http-terminator");
const PORT = process.env.PORT || 9080;
const REDIS_HOST = process.env.REDIS_SERVICE_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_SERVICE_PORT || "30001";
const VERSION = process.env.IMAGE_VERSION || "latest";
const LOG = (0, debug_1.default)('carmel:relay:server');
const DIR = path_1.default.dirname(__dirname);
LOG(`version: ${VERSION}`);
LOG(`redis host: ${REDIS_HOST}`);
LOG(`redis port: ${REDIS_PORT}`);
class Server {
    constructor() {
        this._swarm = new _1.Swarm(this);
    }
    get swarm() {
        return this._swarm;
    }
    get pipe() {
        return this._pipe;
    }
    get terminator() {
        return this._terminator;
    }
    get sub() {
        return this._sub;
    }
    get pub() {
        return this._pub;
    }
    get adapter() {
        return this._adapter;
    }
    get adapterNext() {
        return this._adapterNext;
    }
    get io() {
        return this._io;
    }
    get app() {
        return this._app;
    }
    get http() {
        return this._http;
    }
    connect(io, pipe) {
        LOG(`connecting`);
        io.on('connection', (socket) => {
            LOG('new connection');
            socket.on('ss-join', pipe.join.bind(pipe, socket));
            socket.on('ss-leave', pipe.leave.bind(pipe, socket));
            socket.on('disconnect', pipe.disconnect.bind(pipe, socket));
            socket.on('ss-handshake', pipe.handshake.bind(pipe, socket));
        });
    }
    async stop() {
        var _a;
        (_a = this.terminator) === null || _a === void 0 ? void 0 : _a.terminate();
    }
    async start() {
        const sio = require('socket.io');
        const sioNext = require('socket.io-next');
        const sior = require('socket.io-redis');
        const siorNext = require('socket.io-redis-next');
        this._app = (0, express_1.default)();
        this.app.use((0, cors_1.default)());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use((0, cookie_parser_1.default)());
        this.app.use(express_1.default.static(path_1.default.resolve(DIR, 'public')));
        this._http = http_1.default.createServer({}, this.app);
        this._pub = new ioredis_1.Cluster([{ port: parseInt(REDIS_PORT), host: REDIS_HOST }]);
        this._sub = new ioredis_1.Cluster([{ port: parseInt(REDIS_PORT), host: REDIS_HOST }]);
        this._adapter = sior({ pubClient: this.pub, subClient: this.sub });
        this._adapterNext = siorNext.createAdapter({ pubClient: this.pub, subClient: this.sub });
        this._io = [
            new sio(this.http, {
                path: '/socket.io',
                adapter: this.adapter,
                transports: ['websocket']
            }),
            sioNext(this.http, {
                path: '/socket.io-next/',
                adapter: this.adapterNext,
                transports: ['websocket']
            })
        ];
        await this.swarm.start();
        this._pipe = [new _1.Pipe(this, 0), new _1.Pipe(this, 1)];
        this.io.map((io, i) => this.connect(io, this.pipe[i]));
        this.app.get("/status", async (req, res) => {
            const status = await this.swarm.status();
            return res.json(status);
        });
        const server = this.http.listen(PORT, () => {
            LOG(`started server on port ${PORT}`);
        });
        this._terminator = (0, http_terminator_1.createHttpTerminator)({ server });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map