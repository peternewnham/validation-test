'use strict';

const Boom = require('boom');
const validate = require('./validate');

const handler = function(request, reply) {

  const { form, values, state } = request.payload;

  return validate(form, values, state)
    .then(valid => {
      reply({
        valid
      });
    })
    .catch(e => {
      reply(Boom.badImplementation(e.message));
    });

};

module.exports = {
  method: 'POST',
  path: '/form',
  handler
};
