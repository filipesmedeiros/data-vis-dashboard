"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Rect_1 = __importDefault(require("./svg/Rect"));
var BasicGraph_1 = __importDefault(require("./BasicGraph"));
var env_1 = require("../env");
exports.StyledBarGraphContent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    background: lightcoral;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n\n    & > div {\n        display: flex;\n        justify-content: space-between;\n        padding: 0 3% 5% 3%; // Fix this CSS, reflection below makes padding weird\n        transform: scale(1, -1);\n        height: 100%;\n        width: 100%;\n        box-sizing: border-box;\n    }\n"], ["\n    width: 100%;\n    height: 100%;\n    background: lightcoral;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n\n    & > div {\n        display: flex;\n        justify-content: space-between;\n        padding: 0 3% 5% 3%; // Fix this CSS, reflection below makes padding weird\n        transform: scale(1, -1);\n        height: 100%;\n        width: 100%;\n        box-sizing: border-box;\n    }\n"])));
exports.calcBarWidth = function (values, gap) { return (100 - (gap !== undefined ? gap : 0) * values.length) / values.length; };
exports.calcBarHeight = function (value, scale) { return ((value - scale.begin) * 100) / (scale.end - scale.begin); };
exports.BarGraphContent = function (props) { return (react_1.default.createElement(exports.StyledBarGraphContent, null,
    react_1.default.createElement("div", null, props.values.map(function (value, index) {
        var _a;
        return (react_1.default.createElement(Rect_1.default, { key: index, height: exports.calcBarHeight(value, props.scale), width: exports.calcBarWidth(props.values, (_a = props.barStyling) === null || _a === void 0 ? void 0 : _a.gap), styling: {
                unit: env_1.Unit.percent
            } }));
    })))); };
var BarGraph = function (props) { return (react_1.default.createElement(BasicGraph_1.default, { className: props.className, title: props.title, styling: props.styling, yLabel: 'Y Label', xLabel: 'X Label' },
    react_1.default.createElement(exports.BarGraphContent, { scale: props.scale, values: props.values, barStyling: props.barStyling }))); };
exports.default = BarGraph;
var templateObject_1;
