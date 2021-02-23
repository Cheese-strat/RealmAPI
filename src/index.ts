import express from "express";
const app = express();
const PORT = 527;

app.get("/", (req, res) => {
	const UserAgent = req.headers["user-agent"];
	const ContentType = req.headers["Content-Type"];
	if (!UserAgent) {
		return res.send('{code:400,message:"no user-agent header supplied"}');
	}
	if (!ContentType) {
		return res.send("<p>hello world</p>");
	}
	console.log("user agent: ", UserAgent);
	return res.send('{code:200,message"hello world"}');
});
app.listen(PORT);
