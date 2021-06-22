export interface Item {
	timestamp: number;
	temperature: number;
	humidity: number;
	arduinoId: number;
}

type Schema = Item[];

export default Schema;
