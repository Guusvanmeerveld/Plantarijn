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
			id: "Temperatuur",
			color: "red"
		},
		{
			data: data.map((item) => ({
				x: new Date(item.timestamp),
				y: item.humidity
			})),
			id: "Vochtigheid",
			color: "hsl(183, 70%, 50%)"
		}
	];
	// console.log(chartData);

	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<ResponsiveLine
					theme={{
						background: "#121212",
						textColor: "white"
					}}
					colors={["#F44336", "#2196F3"]}
					animate={false}
					enablePoints={false}
					curve="basis"
					enableGridX={false}
					enableGridY={false}
					tooltip={({ point }) => (
						<div
							className={classes.tooltip}
							style={{ backgroundColor: point.serieColor }}
						>
							{point.serieId}: {point.data.yFormatted}
							{point.serieId == "Vochtigheid" ? "%" : "℃"}
							<br></br>
							{point.data.xFormatted}
						</div>
					)}
					gridYValues={10}
					gridXValues={10}
					data={chartData}
					xScale={{
						type: "time",
						format: "%Y-%m-%d",
						precision: "minute",
						useUTC: false
					}}
					yScale={{
						max: 100,
						type: "linear",
						min: 0
					}}
					axisBottom={{
						format: "%b %d",

						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: "transportation",
						legendOffset: 36,
						legendPosition: "middle"
					}}
					xFormat="time:%Y-%m-%d %H:%M:%S"
					useMesh={true}
					enableSlices={false}
				/>
			</div>
		</div>
	);
};
export default LineChart;
