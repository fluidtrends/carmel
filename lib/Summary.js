var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "jayesse", "antd"], function (require, exports, react_1, jayesse_1, antd_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    const { Title, Paragraph } = antd_1.Typography;
    const { Text } = jayesse_1.Web.Components;
    exports.default = (props) => {
        const { assets } = props;
        const { string } = assets;
        return (react_1.default.createElement("div", { style: {
                padding: 80,
                backgroundColor: "#E1F5FE"
            } },
            react_1.default.createElement(Title, { level: 1, style: { textAlign: 'center' } }, string('welcome')),
            react_1.default.createElement(Title, { level: 4, style: { textAlign: 'center' } }, "The Open2 Tech Marketplace that exists to help low-tech human workers develop on-demand tech skills and provide a better future for their families, by redefining human work in the machine era.")));
    };
});
//# sourceMappingURL=Summary.js.map