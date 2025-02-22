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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var flag = __importStar(require("./flags/flagsIndex"));
var react_native_fast_image_1 = __importDefault(require("react-native-fast-image"));
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var CountryFlag = function (_a) {
    var isoCode = _a.isoCode, size = _a.size, style = _a.style;
    // This switch case is just there because you can't name variables "in" and "do"
    switch (isoCode.toLowerCase()) {
        case "in":
            return react_1.default.createElement(react_native_fast_image_1.default, { style: [{ width: size * 1.6, height: size }, style], source: flag["ind"], resizeMode: react_native_fast_image_1.default.resizeMode.contain });
        case "do":
            return react_1.default.createElement(react_native_fast_image_1.default, { style: [{ width: size * 1.6, height: size }, style], source: flag["dom"], resizeMode: react_native_fast_image_1.default.resizeMode.contain });
        case "gb-eng":
        case "gb-nir":
        case "gb-sct":
        case "gb-wls":
            var suffix = capitalizeFirstLetter(isoCode.toLowerCase().split("-")[1]);
            var key = "gb" + suffix;
            return react_1.default.createElement(react_native_fast_image_1.default, { style: [{ width: size * 1.6, height: size }, style], source: flag[key], resizeMode: react_native_fast_image_1.default.resizeMode.contain });
        default:
            return (react_1.default.createElement(react_native_fast_image_1.default, { style: [{ width: size * 1.6, height: size }, style], source: flag[isoCode.toLowerCase()], resizeMode: react_native_fast_image_1.default.resizeMode.contain }));
    }
};
exports.default = CountryFlag;
