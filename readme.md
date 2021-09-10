# Veriteos Javascript Library

Official Javascript client library for Veriteos API.

## Documentation

Please see [Veriteos API documentation](https://docs-api.veriteos.com/?javascript).

## Installation

Install the `veriteos` Npm package using `npm`:

```
$ npm install veriteos
```

## Usage

```javascript
import { VeriteosClient } from "veriteos";

// Instantiate client
const client = new VeriteosClient({
  sentinel_uri: "https://sentinel.veriteos.com", // change this to local sentinel URI
  should_send_data: false,
});

// Add metadata about the event you want to register
const ev = {
  pipeline: {
    version: "0.1",
    user: "test@veriteos.com",
  },
  event: {
    task_name: "test",
    task_version: "0.0.1",
    task_environment: "dev",
  },
  data: {
    payload: {
      actor: "Third party",
      action: "Prompt",
      payload: { hash: "e0031dd346a21d128fe89f2218ac133c" },
    },
    type: "json",
    uri: "/path/to/file",
    source: "demo",
    destination: "demo dest",
  },
  reporter: {
    name: "demo-client-test",
  },
};

// Register it to your local sentinel instance
client.register(ev);
```

## Troubleshooting

If you notice any problems, please drop us an email at [support@veriteos.com](mailto:support@veriteos.com).
