'use strict';

const routes = [
  //require('./form'),
  require('./headers')
];

module.exports = function(server) {
  routes.forEach(route => server.route(route));
};
