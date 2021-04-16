"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/:killername", (req, res) => {
    console.log(req.params.killername);
    return res.send({ name: "bubba boi" });
});
router.get("/:killername/power", (req, res) => {
    console.log(req.params.killername);
    return res.send({ name: "chainsaw go brr" });
});
router.get("/:killername/addons", (req, res) => {
    console.log(req.params.killername);
    return res.send({ name: "saw juice" });
});
exports.default = router;
