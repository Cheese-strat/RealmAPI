import {Router} from "express";
import shrine from "./shrine";
import info from "./info";
import codes from "./codes";
import killers from "./killers";
import mysql from "mysql";
import config from "../../../configuration";

const router = Router();
const connection = mysql.createConnection(config.mysql);
connection.connect();
router.use("/killers", killers);

router.use("/shrine", shrine);
router.use("/info", info);
router.use("/codes", codes);

export default router;
