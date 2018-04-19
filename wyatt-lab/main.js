const fileReader = require('./lib/reader');
const logger = require('./lib/logger');

const random1 = `${__dirname}/data/random1.txt`;
const random2 = `${__dirname}/data/random2.txt`;
const random3 = `${__dirname}/data/random3.txt`;

const files = [random1, random2, random3];

const array = [];

const readFileArray = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  
  const currentFilePath = fileArray[currentIndex];
  try {
    return fileReader(currentFilePath, (err, data) => {
      if (err) {
        logger.log(logger.ERROR, err);
      }
      array.push(data);
      readFileArray(fileArray, currentIndex + 1, callback);
    });
  } catch (err) {
    logger.log(logger.ERROR, err);
  }
  return undefined;
};

readFileArray(files, 0, () => {
  logger.log(logger.INFO, 'All files have been read');
  logger.log(logger.INFO, array);
});
