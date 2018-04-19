'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {
  test('file read', (done) => {
    reader(`${__dirname}/../data/random1.txt`, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('random1');
      done();
    });
  });
});
