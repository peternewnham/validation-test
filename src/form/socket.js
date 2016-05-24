'use strict';

exports.register = function(server, options, next) {

  var io = require('socket.io')(server.select('form').listener);

  io.on('connection', function (socket) {

    console.log('New connection!');

    socket.on('hello', Handlers.hello);
    socket.on('newMessage', Handlers.newMessage);
    socket.on('goodbye', Handlers.goodbye);
  });

  next();

};
