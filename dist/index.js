"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
const PORT = 527;
app.use("/", index_1.default.Home);
app.use("/api/v1/games", index_1.default.games);
app.use("*/*", index_1.default.NotFound);
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
