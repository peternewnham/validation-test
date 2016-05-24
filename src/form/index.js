'use strict';

module.exports = function(server) {

  server.connection({
    port: 80,
    labels: ['form']
  });

  server.register(require('./socket'), function (err) {
    if (err) {
      throw err;
    }
    server.start();
  });

};
