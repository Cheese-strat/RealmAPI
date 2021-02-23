"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 527;
app.get("/", (req, res) => {
    const userAgent = req.headers["user-agent"];
    const accept = req.headers["accept"];
    if (!userAgent) {
        return res.send('{code:200,message:"hello world"}');
    }
    if (!accept) {
        return res.send('{code:400,message:"no accept header supplied"}');
    }
    console.log("user agent: ", userAgent);
    return res.send("<p>hello world</p>");
});
app.listen(PORT);
