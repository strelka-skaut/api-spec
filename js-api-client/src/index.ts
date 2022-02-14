import "./xhr2-loader";

import { Uuid } from "./common_pb";

export * as Common from "./common_pb";
export * as Sites from "./sites_pb";
export * as SitesClient from "./SitesServiceClientPb";
export * as Pages from "./pages_pb";
export * as PagesClient from "./PagesServiceClientPb";
export * as Media from "./media_pb";
export * as MediaClient from "./MediaServiceClientPb";

export function makeUuid(uuidStr: string): Uuid {
	let uuid = new Uuid;
	uuid.setValue(uuidStr);
	return uuid;
}
