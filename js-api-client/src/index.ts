import "./xhr2-loader";

import { Uuid } from "./common_pb";

export * as Common from "./common_pb";
export * as Pages from "./pages_pb";
export * as PagesClient from "./PagesServiceClientPb";

export function makeUuid(uuidStr: string): Uuid {
	let uuid = new Uuid;
	uuid.setValue(uuidStr);
	return uuid;
}
