/// @ts-expect-error
import json from "../config.json";

interface configTYPE {
	port: number;
	mysql: {
		host: string;
		user: string;
		password: string;
		port: number;
	};
}
export default json as configTYPE;
