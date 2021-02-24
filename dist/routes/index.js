"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = __importDefault(require("./pages/home"));
const _404_1 = __importDefault(require("./pages/404"));
const index_1 = __importDefault(require("./games/index"));
exports.default = {
    NotFound: _404_1.default,
    Home: home_1.default,
    games: index_1.default,
};
