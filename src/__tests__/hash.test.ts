import {
  generateMD5HashFromPayload,
  generateSHA256HashFromPayload,
} from "../utils";

import { testPayloads } from "./fixtures";

test("Js hash value should be the same as in python for random dictionary", () => {
  const jsMD5 = generateMD5HashFromPayload(testPayloads.items[0].payload);
  const jsSHA256 = generateSHA256HashFromPayload(testPayloads.items[0].payload);

  expect(jsMD5).toBe(testPayloads.items[0].pythonMD5HashValue);
  expect(jsSHA256).toBe(testPayloads.items[0].pythonSHA256HashValue);
});

test("Js hash value should be the same as in python for random array of numbers", () => {
  const jsMD5 = generateMD5HashFromPayload(testPayloads.items[1].payload);
  const jsSHA256 = generateSHA256HashFromPayload(testPayloads.items[1].payload);

  expect(jsMD5).toBe(testPayloads.items[1].pythonMD5HashValue);
  expect(jsSHA256).toBe(testPayloads.items[1].pythonSHA256HashValue);
});

test("Js hash value should be the same as in python for valid event without metadata added", () => {
  const jsMD5 = generateMD5HashFromPayload(testPayloads.items[2].payload);
  const jsSHA256 = generateSHA256HashFromPayload(testPayloads.items[2].payload);

  expect(jsMD5).toBe(testPayloads.items[2].pythonMD5HashValue);
  expect(jsSHA256).toBe(testPayloads.items[2].pythonSHA256HashValue);
});
