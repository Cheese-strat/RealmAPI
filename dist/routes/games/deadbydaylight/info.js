"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/generators", (_req, res) => {
    res.json("generators");
});
router.get("/chests", (_req, res) => {
    res.send("chests");
});
router.get("/killers/:killername", (req, res) => {
    const obj = {
        bubba: "bruh",
        legion: ":) hello danny",
    };
    return res.send(obj[req.params.killername]);
});
router.get("/walls", (_req, res) => {
    res.send("walls");
});
router.get("/windows", (_req, res) => {
    res.send("windows");
});
router.get("/totems", (_req, res) => {
    res.send("totems");
});
router.get("/hooks", (_req, res) => {
    res.send("hooks");
});
router.get("/pallets", (_req, res) => {
    res.send("pallets");
});
router.get("/gates", (_req, res) => {
    res.send("gates");
});
exports.default = router;
