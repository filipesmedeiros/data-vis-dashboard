"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// SVG stuff
exports.NONE = 'none';
// Length units for CSS
var Unit;
(function (Unit) {
    Unit["percent"] = "%";
    Unit["px"] = "px";
    Unit["em"] = "em";
    Unit["rem"] = "rem";
    Unit["in"] = "in";
    Unit["vh"] = "vh";
    Unit["vw"] = "vw";
})(Unit = exports.Unit || (exports.Unit = {}));
// Defaults (not theming)
exports.DEFAULT_COLOR = 'orange';
exports.DEFAULT_BORDER_WIDTH = 0;
exports.DEFAULT_UNIT = Unit.px;
exports.DEFAULT_FILL = true;
exports.DEFAULT_GRAPH_CONTENT_WIDTH = '90%';
exports.DEFAULT_GRAPH_CONTENT_HEIGHT = '90%';
