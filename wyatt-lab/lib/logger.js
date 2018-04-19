'use strict';

const winston = require('winston');

const logger = module.exports = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'log.log', level: 'verbose' }),
    new winston.transports.Console({ format: winston.format.simple(), level: 'info' }),
  ],
});
logger.ERROR = 'error';
logger.VERBOSE = 'verbose';
logger.INFO = 'info';
logger.WARN = 'warn';
