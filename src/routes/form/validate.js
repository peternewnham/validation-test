'use strict';

const Adapt = require('@appsbroker/adapt-core/dist/all');

module.exports = function(config, values, state) {

  return new Promise((resolve, reject) => {

    try {

      // create adapt instance
      const instance = new Adapt('node-validation', config);

      // set values and state
      instance.model.setValues(values);
      instance.state.set(state);

      // validate and return result once the form has set up
      instance.whenInactive(() => {
        resolve(instance.model.isValid());
      });

    }
    catch (e) {
      reject(e);
    }

  });

};
