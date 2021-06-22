import styles from "./Title.module.scss";

import { FC } from "react";

const Title: FC = () => (
	<h1 className={styles.title}>Welkom bij het Plantarijn Dashboard</h1>
);

export default Title;
