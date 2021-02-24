import DBD from "./deadbydaylight/index";

import {Router} from "express";
const router = Router();
router.use("/deadbydaylight", DBD);
export default router;
