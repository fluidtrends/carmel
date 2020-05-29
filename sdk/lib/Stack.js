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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var _1 = require(".");
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Stack.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Stack.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Stack.ts/stats | Code Stats}
 *
 * @category Core
 */
var Stack = /** @class */ (function () {
    function Stack(props) {
        this._props = props;
    }
    Object.defineProperty(Stack.prototype, "name", {
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "dir", {
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "workspace", {
        get: function () {
            return this._workspace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "props", {
        get: function () {
            return this._props;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "bundle", {
        get: function () {
            return this._bundle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "exists", {
        get: function () {
            return this.props &&
                this.name &&
                this.workspace &&
                this.workspace.session &&
                this.workspace.session.index.sections.bundles &&
                this.workspace.session.index.sections.bundles.exists;
        },
        enumerable: false,
        configurable: true
    });
    Stack.prototype.load = function (workspace) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this._workspace = workspace;
                // this._bundle = await this.workspace?.session?.findBundle(this.props.bundle, this.props.version)
                // if (!this.bundle) {
                //     throw Errors.StackCannotLoad(this.name || "unknown", 'it is invalid')
                // }
                // this._dir = this.bundle.dir.dir('stacks')?.dir(this.name)
                // this._dir = new Dir(`/Users/idancali/idancali/dev/papanache`)
                this._dir = new _1.Dir("/Users/idancali/idancali/dev/carmel/stacks/react");
                if (!((_a = this.dir) === null || _a === void 0 ? void 0 : _a.exists)) {
                    throw _1.Errors.StackCannotLoad(this.name, 'it is missing');
                }
                return [2 /*return*/, this];
            });
        });
    };
    Stack.prototype.makeConfig = function () {
        //   const papanacheVersion = session.get('papanacheVersion')
        //   const bananasVersion = session.get('bananasVersion')
        //   const templateDir = path.resolve(session.index.path, 'archives', '@fluidtrends/bananas', bananasVersion, '@fluidtrends/bananas')
        //   const root = path.resolve(session.index.path, 'archives', 'papanache', papanacheVersion, 'papanache')
        //   const dir = process.cwd()
        //   const chunkyWebDir = path.resolve(templateDir, 'node_modules', 'react-dom-chunky')
        //   const dev = this.isDev 
        //   const templateAssets = [{
        //     path: `node_modules/react-dom-chunky/app/assets`, glob: '**/*' 
        //   }]
        //   return {
        //     dir,
        //     root,
        //     templateDir,
        //     port: 8082,
        //     templateAssets,
        //     script: path.resolve(chunkyWebDir, 'app', `index${dev ? '.dev' : ''}.js`),
        //     page: path.resolve(chunkyWebDir, 'app', 'pages', 'default.html')
        //   }
        // const stack
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map