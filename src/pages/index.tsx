import { NextSeo } from "next-seo";

import Title from "@components/Title";

import { GetStaticProps, NextPage } from "next";
import createDatabase from "utils/createDatabase";
import Schema from "models/database";

type Props = {
	data: Schema;
};

const Index: NextPage<Props> = ({ data }) => (
	<>
		<NextSeo title="Hello World" />
		<Title />
		{JSON.stringify(data)}
	</>
);
export const getStaticProps: GetStaticProps<Props> = async () => {
	const store = createDatabase();
	return {
		props: {
			data: store.data
		},
		revalidate: 10
	};
};

export default Index;
