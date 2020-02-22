"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var env_1 = require("../../env");
exports.finalStyling = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var fill = ((_a = props.styling) === null || _a === void 0 ? void 0 : _a.fill) !== undefined ?
        props.styling.fill : env_1.DEFAULT_FILL;
    var fillColor = ((_b = props.styling) === null || _b === void 0 ? void 0 : _b.color) !== undefined ?
        props.styling.color : env_1.DEFAULT_COLOR;
    var borderColor = ((_c = props.styling) === null || _c === void 0 ? void 0 : _c.borderColor) !== undefined ?
        props.styling.borderColor : fillColor;
    var borderWidth = ((_d = props.styling) === null || _d === void 0 ? void 0 : _d.borderWidth) !== undefined ?
        props.styling.borderWidth : env_1.DEFAULT_BORDER_WIDTH;
    var widthUnit = env_1.DEFAULT_UNIT, heightUnit = env_1.DEFAULT_UNIT;
    if (((_e = props.styling) === null || _e === void 0 ? void 0 : _e.unit) !== undefined) {
        widthUnit = props.styling.unit;
        heightUnit = props.styling.unit;
    }
    else {
        if (((_f = props.styling) === null || _f === void 0 ? void 0 : _f.widthUnit) !== undefined)
            widthUnit = props.styling.widthUnit;
        if (((_g = props.styling) === null || _g === void 0 ? void 0 : _g.heightUnit) !== undefined)
            heightUnit = props.styling.heightUnit;
    }
    var viewBoxOffset = borderWidth / 2;
    return { fill: fill, fillColor: fillColor, borderColor: borderColor,
        borderWidth: borderWidth, widthUnit: widthUnit, heightUnit: heightUnit, viewBoxOffset: viewBoxOffset };
};
var Rect = function (props) {
    var _a = exports.finalStyling(props), fill = _a.fill, viewBoxOffset = _a.viewBoxOffset, borderColor = _a.borderColor, borderWidth = _a.borderWidth, heightUnit = _a.heightUnit, widthUnit = _a.widthUnit, fillColor = _a.fillColor;
    return react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: -viewBoxOffset + " " + -viewBoxOffset + "\n                    " + (props.width + 2 * viewBoxOffset) + "\n                    " + (props.height + 2 * viewBoxOffset), width: "" + props.width + widthUnit, height: "" + props.height + heightUnit, role: 'presentation', className: props.className, id: props.className, preserveAspectRatio: 'none' },
        react_1.default.createElement("rect", { x: "0", y: "0", width: props.width, height: props.height, stroke: borderColor, strokeWidth: borderWidth, fill: fill ? fillColor : env_1.NONE }));
};
exports.default = Rect;
