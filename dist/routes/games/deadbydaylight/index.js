"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shrine_1 = __importDefault(require("./shrine"));
const router = express_1.Router();
router.use("/shrine", shrine_1.default);
exports.default = router;
