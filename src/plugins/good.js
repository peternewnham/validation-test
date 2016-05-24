'use strict';

module.exports = {
  register: require('good'),
  options: {
    ops: false,
    reporters: {
      console: [
        {
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [
            {
              log: '*',
              response: '*'
            }
          ]
        },
        {
          module: 'good-console',
          args: [
            {
              format: 'YYYY-MM-DDTHH:mm:ss.SSS'
            }
          ]
        },
        'stdout'
      ]
    }
  }
};
