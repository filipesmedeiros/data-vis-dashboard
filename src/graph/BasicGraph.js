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
var GraphLayout = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template: 'title title' auto \n                 'yLabel content' 90%\n                 'axis xLabel' auto / auto 90%;\n"], ["\n  display: grid;\n  grid-template: 'title title' auto \n                 'yLabel content' 90%\n                 'axis xLabel' auto / auto 90%;\n"])));
var GridArea = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    grid-area: ", ";\n"], ["\n    grid-area: ", ";\n"])), function (props) { return props.area; });
var titleStyle = styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: center;\n"], ["\n  text-align: center;\n"])));
var TitleArea = styled_components_1.default(GridArea)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), titleStyle);
var BasicGraph = function (props) {
    return react_1.default.createElement(GraphLayout, { className: props.className },
        react_1.default.createElement(TitleArea, { area: 'title' }, props.title),
        react_1.default.createElement(GridArea, { area: 'yLabel' }, props.yLabel),
        react_1.default.createElement(GridArea, { area: 'xLabel' }, props.xLabel),
        react_1.default.createElement(GridArea, { area: 'content' }, props.children),
        react_1.default.createElement(GridArea, { area: 'axis' }));
};
exports.default = BasicGraph;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
