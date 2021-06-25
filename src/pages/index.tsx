import { NextSeo } from "next-seo";

import Title from "@components/Title";

import { GetStaticProps, NextPage } from "next";
import createDatabase from "utils/createDatabase";
import { Props } from "models/database";
import Current from "@components/Current";
import LineChart from "@components/LineChart";

const Index: NextPage<Props> = ({ data }) => (
	<>
		<NextSeo title="Dashboard" />
		<Title />
		<Current data={data} />
		<LineChart data={data} />
	</>
);
export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = createDatabase().data;
	// const data = genData();
	// store.data = data;
	// store.write();
	return {
		props: {
			data
		},
		revalidate: 10
	};
};

export default Index;
