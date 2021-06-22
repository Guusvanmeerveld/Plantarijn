import classes from "./LineChart.module.scss";
import { ResponsiveLine, Serie } from "@nivo/line";

import { Props } from "../models/database";
import { FC } from "react";

const LineChart: FC<Props> = ({ data }) => {
	const chartData: Serie[] = [
		{
			data: data.map((item) => ({
				x: new Date(item.timestamp),
				y: item.temperature
			})),
			id: "Temperatuur"
		},
		{
			data: data.map((item) => ({
				x: new Date(item.timestamp),
				y: item.humidity
			})),
			id: "Vochtigheid"
		}
	];
	// console.log(chartData);

	return (
		<div className={classes.container}>
			<ResponsiveLine
				theme={{
					background: "#121212",
					tooltip: { container: { background: "#000" } }
				}}
				data={chartData}
				xScale={{
					type: "time",
					format: "%Y-%m-%d",
					precision: "minute",
					useUTC: false
				}}
				// yFormat={(n) => n * 2}

				axisBottom={{
					format: "%b %d"
				}}
				xFormat="time:%Y-%m-%d %H:%M"
				useMesh={true}
				enableSlices={false}
			/>
		</div>
	);
};
export default LineChart;
