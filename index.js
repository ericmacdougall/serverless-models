'use strict';
const reqDir = require('require-dir');
const buildResource = require('./buildResource.js');
const modelsDir = reqDir('./models/')
module.exports = mongoose => {
  const models = {};
  const resources = {};
  const pluralExceptions = {
    //Add plural exceptions
    userstatus: 'userstatuses',
  };

  for (let m in modelsDir) {
    const modelKey = m[0].toUpperCase() + m.substring(1).toLowerCase();
    const resourceKey = pluralExceptions[m.toLowerCase()]
      ? pluralExceptions[m.toLowerCase()]
      : m.toLowerCase() + 's';

    models[modelKey] = modelsDir[m](mongoose);
    resources[resourceKey] = buildResource(resourceKey);
  }

  return { models, resources };
};
