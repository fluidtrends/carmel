"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../..");
var props = {
    id: "ipfs",
    longRunning: true,
    type: __1.CommandType.WORKSPACE,
    title: "Manage your IPFS Node"
};
/**
 *
 * @category Commands
 */
var Ipfs = /** @class */ (function (_super) {
    __extends(Ipfs, _super);
    /** @internal */
    function Ipfs() {
        return _super.call(this, props) || this;
    }
    /** @internal */
    Ipfs.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /** @internal */
    Ipfs.prototype.start = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var createController, node;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        createController = require('ipfsd-ctl').createController;
                        process.env.IPFS_PATH = (_b = (_a = this.session.dir.dir('ipfs')) === null || _a === void 0 ? void 0 : _a.make()) === null || _b === void 0 ? void 0 : _b.path;
                        return [4 /*yield*/, createController({
                                type: 'js',
                                ipfsModule: require('ipfs'),
                                ipfsHttpModule: require('ipfs-http-client'),
                                ipfsBin: require.resolve('ipfs/src/cli.js'),
                                init: true,
                                start: true,
                                ipfsOptions: { start: true, init: true, repo: process.env.IPFS_PATH }
                            })];
                    case 1:
                        node = _c.sent();
                        return [2 /*return*/, node];
                }
            });
        });
    };
    /** @internal */
    Ipfs.prototype.exec = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __awaiter(this, void 0, void 0, function () {
            var start, stop, isRunning, node;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        start = this.arg("start");
                        stop = this.arg("stop");
                        isRunning = (_b = (_a = this.session.dir.dir('servers')) === null || _a === void 0 ? void 0 : _a.dir('ipfs')) === null || _b === void 0 ? void 0 : _b.exists;
                        (_d = (_c = this.session) === null || _c === void 0 ? void 0 : _c.manifest) === null || _d === void 0 ? void 0 : _d.load();
                        if (!(start && !isRunning)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.start()];
                    case 1:
                        node = _j.sent();
                        (_f = (_e = this.session) === null || _e === void 0 ? void 0 : _e.manifest) === null || _f === void 0 ? void 0 : _f.update({
                            ipfs: {
                                apiPort: node.api.apiPort,
                                gatewayPort: node.api.gatewayPort,
                                id: node.api.peerId.id,
                                publicKey: node.api.peerId.publicKey,
                            }
                        });
                        return [2 /*return*/];
                    case 2:
                        if (!(stop && isRunning)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.stop()];
                    case 3:
                        _j.sent();
                        (_h = (_g = this.session) === null || _g === void 0 ? void 0 : _g.manifest) === null || _h === void 0 ? void 0 : _h.update({
                            ipfs: false
                        });
                        return [2 /*return*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Ipfs;
}(__1.Command));
exports.default = Ipfs;
// const { createFactory, createController, createServer } = require('ipfsd-ctl')
// process.env.IPFS_PATH = this.code.product.session!.dir.dir('ipfs')?.make()?.path    
// console.log(process.env.IPFS_PATH)
// const deploymentId = shortid.generate()
// const deploymentRoot = `/deployments/${deploymentId}`                      
// const ignores = ['.DS_Store']
// let files: any[] = await listDir(this.dir!.path!)
// files = files.filter(file => !ignores.includes(path.basename(file))).map(file => {
//   const info = fs.statSync(file)
//   return {
//       path: `${deploymentRoot}/${path.relative(this.dir!.path!, file)}`,
//       content: fs.readFileSync(file),
//       mtime: info.mtime
//   }
// })
// let deployment: any = {
//   timestamp: Date.now(),
//   id: deploymentId,
//   files: files.length
// }
// if (!files || files.length === 0) return deployment 
// console.log('starting ipfs node ...')
// const node = await createController({
//   type: 'js',
//   ipfsModule: require('ipfs'),
//   ipfsHttpModule: require('ipfs-http-client'),
//   ipfsBin: path.join(__dirname, '../../node_modules/ipfs/src/cli/bin.js'),
//   init: true, 
//   start: true,
//   ipfsOptions: { start: true, init: true, repo: process.env.IPFS_PATH }
// })
// const localGatewayUrl = `http://${node.api.gatewayHost}:${node.api.gatewayPort}`
// const publicGatewayUrl = `https://ipfs.io`//cloudflare-ipfs.com`
// console.log('done. pushing files ...')
// await Promise.all(files.map(file => node.api.files.write(file.path, file.content, {
//   parents: true, create: true, mtime: file.mtime  
// })))
// console.log('done. checking files ...')
// const deployed = []
// for await (const result of node.api.files.ls(deploymentRoot)) deployed.push(result)
// const deployedWeb = deployed.find(d => d.name === 'web')
// console.log(deployedWeb.cid)
// console.log('done. publishing web ...')
// const deployedWebNamed = await node.api.name.publish(deployedWeb.cid)
// deployment.urls = {
//   publicRaw: `${publicGatewayUrl}/ipfs/${deployedWeb.cid}`,
//   publicNamed: `${publicGatewayUrl}/ipns/${deployedWebNamed.name}`
// }
// console.log(deployment.urls)
// console.log('done. shortening ...')
// const shorten = await axios.post(`https://rel.ink/api/links/`,  {
//   url: deployment.urls.publicRaw
// }, { 
//   headers: { 'Content-Type': 'application/json' }
// })
// if (!shorten || !shorten.data || !shorten.data.hashid) {
//   return deployment
// }
// deployment.urls.short = `https://rel.ink/${shorten.data.hashid}`
// console.log('done. waiting to go live ...')
// console.log(deployment.urls)
// const check = async () => {
//   try {
//     console.log('checking ...')
//     return await axios.get(deployment.urls.publicRaw)
//   } catch {}
// }
// await new Promise((done) => {
//   (async () => {
//     let checked: any
//     while(!checked || checked.status !== 200) {
//       checked = await check()
//     }
//     done()
//   })()
// })
// console.log('done. stopping ipfs node ...')
// await node.stop()
// console.log('ipfs node stopped.')
// return deployment
// if (!this.isOpen) return
// let remote = await this.local?.getRemote('origin')
// if (!remote) {
//   remote = await NodeGit.Remote.create(
//     this.local!,
//     'origin',
//     `git@github.com:${this.owner}/${this.name}.git`
//   )
// }
// await remote?.push(['refs/heads/master:refs/heads/master'], {
//   callbacks: {
//     credentials: this.code.credentials,
//   },
// })
//# sourceMappingURL=index.js.map