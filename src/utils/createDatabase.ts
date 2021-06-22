import Schema from "../models/database";
import { join } from "path";
import Store from "./store";

const createDatabase = (): Store<Schema> => {
	const path = join(process.cwd(), "database", "data.json");
	const store = new Store<Schema>(path, []);
	return store;
};

export default createDatabase;
