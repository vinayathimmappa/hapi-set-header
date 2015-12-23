'use strict';

/**
 * Imports
 */
const util = require('util');

/**
 * Set a server header
 *
 * @param   {Object}    server      Hapi server
 * @param   {String}    key         Header key
 * @param   {*}         value       Header value
 */
module.exports = (server, key, value) => {
  if (!(server && util.isFunction(server.ext))) {
    throw new TypeError('server.ext is not a function');
  }
  if (!(key && util.isString(key))) {
    throw new TypeError('Invalid header key');
  }
  server.ext('onPreResponse', (request, reply) => {
    if (request.response.isBoom) {
      request.response.output.headers[key] = value;
    } else {
      request.response.header(key, value);
    }
    reply.continue();
  });
};
