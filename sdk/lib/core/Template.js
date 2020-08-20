"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
var __1 = require("..");
var jimp_1 = __importDefault(require("jimp"));
var path_1 = __importDefault(require("path"));
var shortid_1 = __importDefault(require("shortid"));
var HORIZONTAL_ALIGN_CENTER = jimp_1.default.HORIZONTAL_ALIGN_CENTER, VERTICAL_ALIGN_MIDDLE = jimp_1.default.VERTICAL_ALIGN_MIDDLE;
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Template.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Template.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Template.ts/stats | Code Stats}
 *
 * @category Core
 */
var Template = /** @class */ (function () {
    /**
     *
     * @param name
     * @param bundle
     */
    function Template(name, bundle, archive) {
        this._archive = archive;
        this._name = name;
        this._artifact = new __1.Artifact(name, bundle, __1.ArtifactsKind.TEMPLATES);
    }
    Object.defineProperty(Template.prototype, "archive", {
        /**
         *
         */
        get: function () {
            return this._archive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Template.prototype, "artifact", {
        /**
         *
         */
        get: function () {
            return this._artifact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Template.prototype, "name", {
        /**
         *
         */
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Template.prototype.generateCovers = function (productCacheDir) {
        return __awaiter(this, void 0, void 0, function () {
            var coversRoot, covers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coversRoot = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.dir('carmel/assets/en/images/covers');
                        covers = (coversRoot === null || coversRoot === void 0 ? void 0 : coversRoot.dirs) || [];
                        return [4 /*yield*/, Promise.all(covers.map(function (cover) { return __awaiter(_this, void 0, void 0, function () {
                                var coverRoot, images, original, image, ext;
                                var _a, _b, _c, _d, _e, _f, _g, _h;
                                return __generator(this, function (_j) {
                                    switch (_j.label) {
                                        case 0:
                                            coverRoot = coversRoot === null || coversRoot === void 0 ? void 0 : coversRoot.dir(cover);
                                            images = coverRoot === null || coverRoot === void 0 ? void 0 : coverRoot.files;
                                            if ((images === null || images === void 0 ? void 0 : images.includes('portrait@3x.png')) || (images === null || images === void 0 ? void 0 : images.includes('portrait@3x.jpg'))) {
                                                return [2 /*return*/];
                                            }
                                            original = (images === null || images === void 0 ? void 0 : images.includes('landscape@3x.png')) ? (_a = coversRoot === null || coversRoot === void 0 ? void 0 : coversRoot.dir(cover)) === null || _a === void 0 ? void 0 : _a.file('landscape@3x.png') : (_b = coversRoot === null || coversRoot === void 0 ? void 0 : coversRoot.dir(cover)) === null || _b === void 0 ? void 0 : _b.file('landscape@3x.jpg');
                                            if (!original || !original.exists) {
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, jimp_1.default.read(original.path)];
                                        case 1:
                                            image = _j.sent();
                                            ext = path_1.default.extname(original.path).substring(1);
                                            return [4 /*yield*/, image.scaleToFit(2560, 1440).quality(100).writeAsync((_c = coverRoot === null || coverRoot === void 0 ? void 0 : coverRoot.file("landscape@2x." + ext)) === null || _c === void 0 ? void 0 : _c.path)];
                                        case 2:
                                            _j.sent();
                                            return [4 /*yield*/, image.scaleToFit(1920, 1080).quality(100).writeAsync((_d = coverRoot === null || coverRoot === void 0 ? void 0 : coverRoot.file("landscape@1x." + ext)) === null || _d === void 0 ? void 0 : _d.path)];
                                        case 3:
                                            _j.sent();
                                            return [4 /*yield*/, image.cover(2160, 3840, HORIZONTAL_ALIGN_CENTER | VERTICAL_ALIGN_MIDDLE).quality(100).writeAsync((_e = coverRoot === null || coverRoot === void 0 ? void 0 : coverRoot.file("portrait@3x." + ext)) === null || _e === void 0 ? void 0 : _e.path)];
                                        case 4:
                                            _j.sent();
                                            return [4 /*yield*/, image.cover(1440, 2560, HORIZONTAL_ALIGN_CENTER | VERTICAL_ALIGN_MIDDLE).quality(100).writeAsync((_f = coverRoot === null || coverRoot === void 0 ? void 0 : coverRoot.file("portrait@2x." + ext)) === null || _f === void 0 ? void 0 : _f.path)];
                                        case 5:
                                            _j.sent();
                                            return [4 /*yield*/, image.cover(1080, 1920, HORIZONTAL_ALIGN_CENTER | VERTICAL_ALIGN_MIDDLE).quality(100).writeAsync((_g = coverRoot === null || coverRoot === void 0 ? void 0 : coverRoot.file("portrait@1x." + ext)) === null || _g === void 0 ? void 0 : _g.path)];
                                        case 6:
                                            _j.sent();
                                            return [4 /*yield*/, image.cover(120, 120, HORIZONTAL_ALIGN_CENTER | VERTICAL_ALIGN_MIDDLE).quality(100).writeAsync((_h = coverRoot === null || coverRoot === void 0 ? void 0 : coverRoot.file("placeholder." + ext)) === null || _h === void 0 ? void 0 : _h.path)];
                                        case 7:
                                            _j.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param dir
     */
    Template.prototype.install = function (dir, name, product) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        return __awaiter(this, void 0, void 0, function () {
            var id, productCacheDir, packerId, stackId, packer, _y, stack, _z, packerDir, stackDir;
            return __generator(this, function (_0) {
                switch (_0.label) {
                    case 0:
                        id = shortid_1.default.generate().toLowerCase();
                        if (product.exists) {
                            // We want to install this in an existing product
                            product.manifest.load();
                            id = product.manifest.data.json().id;
                        }
                        productCacheDir = (_c = (_b = new __1.Dir((_a = product.session) === null || _a === void 0 ? void 0 : _a.index.sections.products.path)) === null || _b === void 0 ? void 0 : _b.dir(id)) === null || _c === void 0 ? void 0 : _c.make();
                        packerId = (_d = this._tpl) === null || _d === void 0 ? void 0 : _d.content.packer;
                        stackId = (_e = this._tpl) === null || _e === void 0 ? void 0 : _e.content.stack;
                        _y = packerId;
                        if (!_y) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_f = product.session) === null || _f === void 0 ? void 0 : _f.index.installArchive({ id: packerId, section: "packers" }))];
                    case 1:
                        _y = (_0.sent());
                        _0.label = 2;
                    case 2:
                        packer = _y;
                        _z = stackId;
                        if (!_z) return [3 /*break*/, 4];
                        return [4 /*yield*/, ((_g = product.session) === null || _g === void 0 ? void 0 : _g.index.installArchive({ id: stackId, section: "stacks" }))];
                    case 3:
                        _z = (_0.sent());
                        _0.label = 4;
                    case 4:
                        stack = _z;
                        packerDir = new __1.Dir(packer.path);
                        stackDir = new __1.Dir(stack.path);
                        return [4 /*yield*/, ((_h = this._tpl) === null || _h === void 0 ? void 0 : _h.save(productCacheDir.path, {}))];
                    case 5:
                        _0.sent();
                        (_j = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.file('carmel.code-workspace')) === null || _j === void 0 ? void 0 : _j.update({
                            folders: [
                                { path: "carmel/assets" },
                                { path: "carmel/chunks" }
                            ],
                            settings: {}
                        });
                        if ((_k = stackDir.dir('node_modules')) === null || _k === void 0 ? void 0 : _k.exists) {
                            // Link node dependencies if necessary
                            (_l = stackDir === null || stackDir === void 0 ? void 0 : stackDir.dir('node_modules')) === null || _l === void 0 ? void 0 : _l.copy(productCacheDir.dir('node_modules'));
                            (_o = (_m = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.dir('node_modules')) === null || _m === void 0 ? void 0 : _m.dir(stackId)) === null || _o === void 0 ? void 0 : _o.link(stackDir);
                        }
                        if (product.exists) {
                            (_p = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.file('.carmel.json')) === null || _p === void 0 ? void 0 : _p.remove();
                            (_q = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.file('.carmel.json')) === null || _q === void 0 ? void 0 : _q.link(dir.file('.carmel.json'));
                            (_r = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.dir('carmel')) === null || _r === void 0 ? void 0 : _r.remove();
                            (_s = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.dir('carmel')) === null || _s === void 0 ? void 0 : _s.link(dir.dir('carmel'));
                            return [2 /*return*/];
                        }
                        (_t = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.file('.carmel.json')) === null || _t === void 0 ? void 0 : _t.move(dir.file('.carmel.json'));
                        (_u = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.file('.carmel.json')) === null || _u === void 0 ? void 0 : _u.link(dir.file('.carmel.json'));
                        (_v = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.dir('carmel')) === null || _v === void 0 ? void 0 : _v.move(dir.dir('carmel'));
                        (_w = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.dir('carmel')) === null || _w === void 0 ? void 0 : _w.link(dir.dir('carmel'));
                        product.manifest.load();
                        product.manifest.data.append({
                            id: id,
                            name: name,
                            carmelSDKVersion: (_x = product.session) === null || _x === void 0 ? void 0 : _x.pkg.version,
                            template: this.name,
                            bundle: this.artifact.bundle.id,
                            bundleVersion: this.artifact.bundle.version,
                            stack: stack.id,
                            stackVersion: stack.version,
                            packer: packer.id,
                            packerVersion: packer.version,
                        });
                        product.manifest.save();
                        return [4 /*yield*/, this.generateCovers(productCacheDir)];
                    case 6:
                        _0.sent();
                        return [2 /*return*/, { packer: packer, stack: stack }];
                }
            });
        });
    };
    /**
     *
     */
    Template.prototype.load = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._archive.load()];
                    case 1:
                        _b.sent();
                        this._tpl = this._archive.templates[this.name];
                        return [4 /*yield*/, ((_a = this._tpl) === null || _a === void 0 ? void 0 : _a.load({}))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return Template;
}());
exports.Template = Template;
//# sourceMappingURL=Template.js.map