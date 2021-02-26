"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function NotFound(req, res) {
    res.status(404);
    if (req.accepts("html")) {
        res.send("<p>No Page found</p>");
        return;
    }
    if (req.accepts("json")) {
        res.send({ error: "Not found" });
        return;
    }
    res.send("Not found");
}
exports.default = NotFound;
