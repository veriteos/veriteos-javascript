import * as yup from "yup";

const eventPipelineSchema = yup.object().shape({
  name: yup.string().required(),
  version: yup.string().required(),
  user: yup.string().required(),
});

const eventMetadataSchema = yup.object().shape({
  taskName: yup.string().required(),
  taskVersion: yup.string().required(),
  taskEnvironment: yup.string().required(),
});

const eventDataSchema = yup.object().shape({
  payload: yup.object().required(),
  type: yup.string().required(),
  uri: yup.string().url().required(),
  source: yup.string().required(),
  destination: yup.string().required(),
});

const eventReporterSchema = yup.object().shape({
  name: yup.string().required(),
});

export const clientEventSchema = yup.object().shape({
  pipeline: eventPipelineSchema,
  event: eventMetadataSchema,
  data: eventDataSchema,
  reporter: eventReporterSchema,
});

export const veriteosClientOptionsSchema = yup.object().shape({
  sentinelUri: yup.string().url().required(),
  shouldSendData: yup.boolean().required(),
});
