# hapi-set-header

[![Circle CI](https://circleci.com/gh/davidwood/hapi-set-header/tree/master.svg?style=svg)](https://circleci.com/gh/davidwood/hapi-set-header/tree/master)

`hapi-set-header` allows for globally setting a response header using an `onPreResponse` extension. Compatible with [Boom](https://www.npmjs.com/package/boom) responses.

## Usage

The following example sets the `Server` header to `Test Server`

```
const Hapi = require('hapi');
const setHeader = requre('hapi-set-header');
const server = new Hapi.Server({});
setHeader(server, 'Server', 'Test Server');
```
