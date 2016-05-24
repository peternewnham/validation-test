const handler = function(request, reply) {

  reply(request.headers);

};

module.exports = {
  method: 'GET',
  path: '/headers',
  handler
};
