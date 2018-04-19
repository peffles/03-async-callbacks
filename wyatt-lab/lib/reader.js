'use strict';

const fs = require('fs');
const logger = require('./logger');

module.exports = (path, callback) => {
  logger.log(logger.VERBOSE, `Reading: ${path}`);
  return fs.readFile(
    path, 
    (error, data) => {
      if (error) {
        return callback(error);
      }
      return callback(null, data.toString('utf8'));
    },
  );
};
