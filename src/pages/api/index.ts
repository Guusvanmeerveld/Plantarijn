import { NextApiHandler } from "next";

import Store from "../../utils/store";
import Schema from "../../models/database";
import { join } from "path";

const Handler: NextApiHandler = async (req, res) => {
	const path = join(process.cwd(), "database", "data.json");
	const store = new Store<Schema>(path, []);
	if (
		process.env.TOKEN &&
		req.headers.authorization?.includes(process.env.TOKEN)
	) {
		store.data.push({
			arduinoId: req.body.arduinoId,
			humidity: req.body.humidity,
			temperature: req.body.temperature,
			timestamp: Date.now()
		});
		store.write();
		res.status(200).json(store.data);
	} else {
		res.status(200).json(store.data);
	}
};
export default Handler;
