import express from "express";
const app = express();
const PORT = 5679;
app.get("/", (_req, res) => {
	res.send("<p>hello world</p>");
});
app.listen(PORT);