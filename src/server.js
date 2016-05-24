'use strict';

const Hapi = require('hapi');

// create server
const server = new Hapi.Server();

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

server.connection({
  host: HOST,
  port: PORT
});

// register routes
require('./routes')(server);

// register plugins
server.register(require('./plugins'), err => {

  if (err) {
    server.log('error', err);
  }

  // start server
  server.start(err => {
    if (err) {
      server.log('error', err)
    }
    server.log('debug', {
      uri: server.info.uri,
      port: server.info.port
    });
  });

});
