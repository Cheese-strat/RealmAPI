"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/", (req, res) => {
    res.status(200);
    console.log(req.query.limit);
    return res.send([
        {
            code_text: "",
            reward: {
                reward_type: "Bloodpoints",
                amount: 0,
                event: false,
            },
            released: new Date().getTime(),
            expired: new Date().getTime() + 360000,
        },
        {
            code_text: "",
            reward: {
                reward_type: "Bloodpoints",
                amount: 0,
                event: false,
            },
        },
    ]);
});
exports.default = router;
