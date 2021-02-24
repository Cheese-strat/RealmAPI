"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./deadbydaylight/index"));
const express_1 = require("express");
const router = express_1.Router();
router.use("/deadbydaylight", index_1.default);
exports.default = router;
