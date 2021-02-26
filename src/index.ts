import express from "express";
import routes from "./routes/index";
const app = express();
const PORT = 527;

app.use("/", routes.Home);
app.use("/api/v1/games", routes.games);
app.use(routes.NotFound);

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});
