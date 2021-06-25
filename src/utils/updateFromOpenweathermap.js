const axios = require("axios");
const data = async () => {
	return await axios(
		"https://api.openweathermap.org/data/2.5/weather?q=wageningen&APPID=b0887abcc3685656225e03a0ed242384&units=metric&lang=nl"
	).then((g) => {
		const data = g.data.main;
		return {
			temperature: data.temp,
			humidity: data.humidity
		};
	});
};
function loop() {
	data().then((data) => {
		axios.post(
			"http://localhost:3000/api",
			{
				arduinoId: 1,
				temperature: data.temperature,
				humidity: data.humidity
			},
			{ headers: { Authorization: process.env.TOKEN } }
		);
	});
	setTimeout(loop, msToFullMinute());
}
const msToFullMinute = () => {
	const date = new Date();
	date.setMinutes(new Date().getMinutes() + 1);
	date.setSeconds(0);
	date.setMilliseconds(0);
	const y = date - Date.now();
	return y;
};
setTimeout(loop, msToFullMinute());
