import { NextApiHandler } from "next";

import createDatabase from "utils/createDatabase";

const Handler: NextApiHandler = async (req, res) => {
	const store = createDatabase();
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
