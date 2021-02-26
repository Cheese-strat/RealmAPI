import {Request, Response} from "express";

function NotFound(req: Request, res: Response) {
	res.status(404);

	// respond with html page
	if (req.accepts("html")) {
		res.send("<p>No Page found</p>");
		return;
	}

	// respond with json
	if (req.accepts("json")) {
		res.send({error: "Not found"});
		return;
	}

	// default to plain-text. send()
	res.send("Not found");
}

export default NotFound;
