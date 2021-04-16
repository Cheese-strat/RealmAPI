"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shrine_1 = __importDefault(require("./shrine"));
const info_1 = __importDefault(require("./info"));
const codes_1 = __importDefault(require("./codes"));
const killers_1 = __importDefault(require("./killers"));
const router = express_1.Router();
router.use("/killers", killers_1.default);
router.use("/shrine", shrine_1.default);
router.use("/info", info_1.default);
router.use("/codes", codes_1.default);
exports.default = router;
