interface PipelineSchema {
  name: string;
  version: string;
  user: string;
}
export interface EventMetadataSchema {
  taskName: string;
  taskVersion: string;
  taskEnvironment: string;
}

interface EventDataSchema {
  payload: object;
  type: string;
  uri: string;
  source: string;
  destination: string;
}

interface EventReporterSchema {
  name: string;
}

export interface ClientEvent {
  pipeline: PipelineSchema;
  event: EventMetadataSchema;
  data: EventDataSchema;
  reporter: EventReporterSchema;
}

export interface ClientOptions {
  sentinelUri: string;
  shouldSendData: boolean;
}
