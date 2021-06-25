import classes from "./Current.module.scss";

import { Props } from "models/database";
import { FC } from "react";

const Current: FC<Props> = ({ data }) => {
	const last = data[data.length - 1];
	const round = (n: number): string => n.toFixed(1);
	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<h1 className={classes.title}>Temperatuur</h1>
				{round(last.temperature)}℃
			</div>
			<div className={classes.card}>
				<h1 className={classes.title}>Vochtigheid</h1>
				{round(last.humidity)}%
			</div>
		</div>
	);
};
export default Current;
