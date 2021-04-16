import express from "express";
import mysql from "mysql";
import routes from "./routes/index";
import config from "./configuration";
const app = express();
const PORT = config.port;

app.use("/", routes.Home);
app.use("/api/v1/games", routes.games);
app.use(routes.NotFound);

const con = mysql.createConnection(config.mysql);
con.connect();

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});
