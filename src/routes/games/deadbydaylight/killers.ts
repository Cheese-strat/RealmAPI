import {Router} from "express";
const router = Router();

router.get("/:killername", (req, res) => {
	console.log(req.params.killername);
	return res.send({name: "bubba boi"});
});

router.get("/:killername/power", (req, res) => {
	console.log(req.params.killername);
	return res.send({name: "chainsaw go brr"});
});

router.get("/:killername/addons", (req, res) => {
	console.log(req.params.killername);
	return res.send({name: "saw juice"});
});

export default router;
