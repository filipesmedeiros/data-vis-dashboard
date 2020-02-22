"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var env_1 = require("../env");
exports.defaultGridLayout = "'title title' auto\n           'yLabel content' " + env_1.DEFAULT_GRAPH_CONTENT_HEIGHT + "\n           'axis xLabel' auto /\n           auto " + env_1.DEFAULT_GRAPH_CONTENT_WIDTH;
exports.getComputedGridLayout = function (width, height, widthUnit, heightUnit) { return "'title title' auto\n      'yLabel content' " + height + heightUnit + "\n      'axis xLabel' auto /\n      auto " + width + widthUnit; };
// Duplicate semi-colon, but that's probably ok
var calcGridLayout = function (contentDimensions) { return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    grid-template: ", ";\n"], ["\n    grid-template: ",
    ";\n"])), function () {
    if (contentDimensions === undefined)
        // Default layout
        return exports.defaultGridLayout;
    else {
        var widthUnit = env_1.DEFAULT_UNIT, heightUnit = env_1.DEFAULT_UNIT;
        if (contentDimensions.unit !== undefined) {
            widthUnit =
                contentDimensions.widthUnit !== undefined
                    ? contentDimensions.widthUnit
                    : contentDimensions.unit;
            heightUnit =
                contentDimensions.heightUnit !== undefined
                    ? contentDimensions.heightUnit
                    : contentDimensions.unit;
        }
        return exports.getComputedGridLayout(contentDimensions.width, contentDimensions.height, widthUnit, heightUnit);
    }
}); };
var GraphLayout = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 400px; // default sizes\n    height: 300px; // default sizes\n    display: grid;\n    min-height: 0;\n    min-width: 0;\n    ", ";\n"], ["\n    width: 400px; // default sizes\n    height: 300px; // default sizes\n    display: grid;\n    min-height: 0;\n    min-width: 0;\n    ", ";\n"])), function (props) { return calcGridLayout(props.contentDimensions); });
var GridArea = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    grid-area: ", ";\n    overflow: hidden;\n    min-width: 0;\n"], ["\n    grid-area: ", ";\n    overflow: hidden;\n    min-width: 0;\n"])), function (props) { return props.area; });
var titleStyle = styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    text-align: center;\n"], ["\n    text-align: center;\n"])));
var TitleArea = styled_components_1.default(GridArea)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), titleStyle);
var yAxisStyle = styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    transform: rotate(180deg);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    & > span {\n        writing-mode: vertical-rl;\n        text-orientation: mixed;\n    }\n"], ["\n    transform: rotate(180deg);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    & > span {\n        writing-mode: vertical-rl;\n        text-orientation: mixed;\n    }\n"])));
var YAxisArea = styled_components_1.default(GridArea)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), yAxisStyle);
var xAxisStyle = styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    text-align: center;\n"], ["\n    text-align: center;\n"])));
var XAxisArea = styled_components_1.default(GridArea)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), xAxisStyle);
var BasicGraph = function (props) {
    var _a;
    return (react_1.default.createElement(GraphLayout, { className: props.className, contentDimensions: (_a = props.styling) === null || _a === void 0 ? void 0 : _a.contentDimensions },
        react_1.default.createElement(TitleArea, { area: "title" },
            react_1.default.createElement("span", null, props.title)),
        react_1.default.createElement(YAxisArea, { area: "yLabel" },
            react_1.default.createElement("span", null, props.yLabel)),
        react_1.default.createElement(XAxisArea, { area: "xLabel" },
            react_1.default.createElement("span", null, props.xLabel)),
        react_1.default.createElement(GridArea, { area: "content" }, props.children),
        react_1.default.createElement(GridArea, { area: "axis" })));
};
exports.default = BasicGraph;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
