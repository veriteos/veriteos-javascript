import superagent from "superagent";

import { clientEventSchema, veriteosClientOptionsSchema } from "./validation";
import { ClientEvent, ClientOptions } from "./types";
import { Counter } from "./counter";
import { enrichValidEvent, uris } from "./utils";

class VeriteosClient {
  version: string;
  sentinelUri: string;
  shouldSendData: boolean;

  constructor(options: ClientOptions) {
    veriteosClientOptionsSchema.validateSync(options, { abortEarly: false });

    this.version = "0.0.1-js";
    this.sentinelUri = options.sentinelUri;
    this.shouldSendData = options.shouldSendData;
  }

  async register(event: ClientEvent) {
    await clientEventSchema.validate(event, { abortEarly: false });
    const c = Counter.getInstance();

    const enrichedEvent = enrichValidEvent(event, this.version, c.count);
    console.log("this is enriched event", enrichedEvent);
    if (!this.shouldSendData) {
      delete enrichedEvent.data.payload;
    }

    try {
      await superagent
        .post(this.sentinelUri + uris.reporterEvents)
        .send(enrichedEvent);
    } catch (err) {
      console.log(
        "\x1b[33m Event could not be forwarded to veriteos sentinel: " +
          err.message +
          "\x1b[0m"
      );
    }
  }
}

// const client = new VeriteosClient({
//   sentinelUri: "https://sentinel.infra.veriteos.com",
//   shouldSendData: false,
// });

// client.register({
//   pipeline: {
//     name: "demo_events",
//     version: "0.1",
//     user: "test@veriteos.com",
//   },
//   event: {
//     taskName: "demo-test",
//     taskVersion: "0.0.1",
//     taskEnvironment: "dev",
//   },
//   data: {
//     payload: {
//       actor: "Third party",
//       action: "Prompt",
//       payload: { hash: "e0031dd346a21d128fe89f2218ac133c" },
//     },
//     type: "json",
//     uri: "http://example.com",
//     source: "demo",
//     destination: "heimdall",
//   },
//   reporter: {
//     name: "demo-client-test",
//   },
// });
