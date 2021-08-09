import { enrichValidEvent } from "../utils";

const eventWithoutMetadata = {
  pipeline: {
    name: "demo_events",
    version: "0.1",
    user: "test@veriteos.com",
  },
  event: {
    taskName: "demo-test",
    taskVersion: "0.0.1",
    taskEnvironment: "dev",
  },
  data: {
    payload: {
      actor: "Third party",
      action: "Prompt",
      payload: { hash: "e0031dd346a21d128fe89f2218ac133c" },
    },
    type: "json",
    uri: "http://example.com",
    source: "demo",
    destination: "heimdall",
  },
  reporter: {
    name: "demo-client-test",
  },
};

const eventWithMetadata = enrichValidEvent(
  JSON.parse(JSON.stringify(eventWithoutMetadata)),
  "0.0.1",
  0
);
console.log("this is event with meta", eventWithMetadata);
export const testPayloads = {
  items: [
    {
      payload: { name: "Alice", age: 25 },
      pythonSHA256HashValue:
        "0424dfbbc98dacd1e58bf68f2d8f37d388700a05160372e6e05ea91712f563de",
      pythonMD5HashValue: "9f8fa962f210c399da7d6c8cf462eb55",
    } as any,
    {
      payload: [1, 2, 3, 552222222222222],
      pythonSHA256HashValue:
        "c42b477c57ce1d5a5d0490f4f82f761834102e47d6df91a653b493fa15d546d8",
      pythonMD5HashValue: "8718d1df3c2828406886ac8cb2563236",
    } as any,
    {
      payload: eventWithoutMetadata,
      pythonSHA256HashValue:
        "e2b9dc27dcd0f52abfbe9635c50d21c51fce093599eaed9f7f95820addb55515",
      pythonMD5HashValue: "8f612c68c1ae5d417a6b1d2fa06b5fad",
    } as any,
    {
      payload: eventWithMetadata,
      pythonSHA256HashValue:
        "e2b9dc27dcd0f52abfbe9635c50d21c51fce093599eaed9f7f95820addb55515",
      pythonMD5HashValue: "8f612c68c1ae5d417a6b1d2fa06b5fad",
    } as any,
  ],
};
