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

export const testPayloads = {
  items: [
    {
      payload: { name: "Alice", age: 25 },
      pythonSHA256HashValue:
        "45ca59b78c209d8bec5e7aa355d217c1a110c9105297bf641f8e090115bc0262",
      pythonMD5HashValue: "60aac94c2ec3777879f970ef03a369e7",
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
        "c40ec98f45898d8927763540d281b22bcf3fc55443211d6ba0c85d115e360296",
      pythonMD5HashValue: "7c9cab5b674f5de5bf59aad8d62c568e",
    } as any,
  ],
};
