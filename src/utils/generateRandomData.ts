import Schema, { Item } from "../models/database";

const generateData = (): Schema => {
	const start = Date.now();

	const data: Schema = [];
	let lastItem: Item = {
		humidity: 50,
		temperature: 20,
		arduinoId: 1,
		timestamp: start
	};
	const lastCo: Record<string, number> = {};
	const genCoeffient = (type: string): number => {
		let last = lastCo[type] ?? randomCoeffient();
		last += randomCoeffient() * 0.1;
		return last;
	};
	const randomCoeffient = (): number => (0.5 - Math.random()) * 4;
	const generateItem = (): Item => {
		const item = { ...lastItem };
		item.timestamp += 60 * 1000;

		item.temperature += genCoeffient("temp");
		item.humidity += genCoeffient("humid");
		console.log(item);
		lastItem = item;
		return item;
	};
	for (let i = 0; i < 100; i++) {
		data.push(generateItem());
	}
	return data;
};
export default generateData;
