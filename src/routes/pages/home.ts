import {Router} from "express";

const router = Router();

router.get("/", (_req, res) => {
	return res.send(
		//Object.values(req.context.models.users)
		'{code:1,message:"hello world"}'
	);
});

router.get("/:userId", (_req, res) => {
	return res.send(
		//req.context.models.users[req.params.userId]
		'{code:2,message:"hello world"}'
	);
});

export default router;
