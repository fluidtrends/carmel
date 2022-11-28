"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
const handlers = __importStar(require("./handlers"));
(async () => {
    const isOperator = process.env.OPERATOR;
    const revision = process.env.REV || "";
    const root = `${process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']}/.carmel/mesh${isOperator ? "-op" : ""}/`;
    try {
        const config = require('../private.json');
        const server = new Node_1.Node(Object.assign(Object.assign({ revision, root, isOperator }, config), { handlers }));
        process.on('SIGINT', async () => {
            await server.stop();
            process.exit();
        });
        await server.start();
        if (!isOperator) {
            await server.send.ping({ message: "Hello" });
        }
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
})();
//# sourceMappingURL=start.js.map