"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/", (_req, res) => {
    res.status(200);
    return res.send({
        perks: [
            {
                id: 1,
                name: "Bond",
                owner: "Dwight Farfield",
            },
            {
                id: 2,
                name: "Prove Thyself",
                owner: "Dwight Farfield",
            },
            {
                id: 3,
                name: "Leader",
                owner: "Dwight Farfield",
            },
        ],
    });
});
router.get("/all", (_req, res) => {
    res.status(200);
    return res.send([
        {
            start: 123454321,
            end: 543212345,
            perks: [
                {
                    id: 1,
                    name: "Bond",
                    owner: "Dwight Farfield",
                },
                {
                    id: 2,
                    name: "Prove Thyself",
                    owner: "Dwight Farfield",
                },
                {
                    id: 3,
                    name: "Leader",
                    owner: "Dwight Farfield",
                },
            ],
        },
        {
            start: 345676543,
            end: 765434567,
            perks: [
                {
                    id: 4,
                    name: "Sprint Burst",
                    owner: "Meg Thomas",
                },
                {
                    id: 5,
                    name: "Adrenaline",
                    owner: "Meg Thomas",
                },
                {
                    id: 6,
                    name: "Quick N Quiet",
                    owner: "Meg Thomas",
                },
            ],
        },
    ]);
});
router.get("/:timestamp", (req, res) => {
    res.status(200);
    console.log(`Retriving entry for ${req.params.timestamp}`);
    return res.send([
        {
            start: 345676543,
            end: 765434567,
            perks: [
                {
                    id: 4,
                    name: "Sprint Burst",
                    owner: "Meg Thomas",
                },
                {
                    id: 5,
                    name: "Adrenaline",
                    owner: "Meg Thomas",
                },
                {
                    id: 6,
                    name: "Quick N Quiet",
                    owner: "Meg Thomas",
                },
            ],
        },
    ]);
});
exports.default = router;
