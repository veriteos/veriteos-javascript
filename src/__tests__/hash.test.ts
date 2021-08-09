import {
  generateMD5HashFromPayload,
  generateSHA256HashFromPayload,
} from "../utils";

import { testPayloads } from "./fixtures";

test("Js hash value should be the same as in python", () => {
  const jsMD5 = generateMD5HashFromPayload(testPayloads.items[0].payload);
  const jsSHA256 = generateSHA256HashFromPayload(testPayloads.items[0].payload);

  // expect(jsMD5).toBe(testPayloads.items[0].pythonMD5HashValue);
  expect(jsSHA256).toBe(testPayloads.items[0].pythonSHA256HashValue);
});
