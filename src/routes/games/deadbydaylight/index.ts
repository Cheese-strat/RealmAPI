import {Router} from "express";
import shrine from "./shrine";
const router = Router();
router.use("/shrine", shrine);

export default router;
