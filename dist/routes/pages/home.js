"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/", (_req, res) => {
    return res.send('{code:1,message:"hello world"}');
});
router.get("/:userId", (_req, res) => {
    return res.send('{code:2,message:"hello world"}');
});
exports.default = router;
