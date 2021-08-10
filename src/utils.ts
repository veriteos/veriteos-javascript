import { v4 as uuidv4, v1 as uuidv1 } from "uuid";
import sha256 from "crypto-js/sha256";
import md5 from "crypto-js/md5";
import decamelize from "decamelize";
import { ClientEvent, EventMetadataSchema } from ".";

export const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";

export const isNode =
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;

export const uris = Object.freeze({
  reporterEvents: "/reporter_events/",
});
function getEventMetadata() {
  return {
    runId: uuidv1(),
    eventId: uuidv4(),
  };
}

export function generateMD5HashFromPayload(payload: object) {
  return md5(JSON.stringify(payload)).toString();
}

export function generateSHA256HashFromPayload(payload: object) {
  return sha256(JSON.stringify(payload)).toString();
}

function decamelizeEventMetadata(eventMetadata: any) {
  for (const prop in eventMetadata) {
    eventMetadata[decamelize(prop)] = eventMetadata[prop];
    delete eventMetadata[prop];
  }
}
export function enrichValidEvent(
  event: ClientEvent,
  version: string,
  count: number
): ClientEvent {
  const metadata = getEventMetadata();
  const enrichedEvent: any = event;
  enrichedEvent["pipeline"]["run_id"] = metadata.runId;

  enrichedEvent["data"]["checksum_md5"] = generateMD5HashFromPayload(
    event["data"]["payload"]
  );
  enrichedEvent["data"]["checksum_sha256"] = generateSHA256HashFromPayload(
    event["data"]["payload"]
  );

  enrichedEvent["reporter"]["version"] = version;
  enrichedEvent["reporter"]["sequence"] = count;
  enrichedEvent["reporter"]["timestamp"] = Date.now();
  decamelizeEventMetadata(enrichedEvent.event);
  enrichedEvent["event"]["id"] = metadata.eventId;
  return enrichedEvent;
}
