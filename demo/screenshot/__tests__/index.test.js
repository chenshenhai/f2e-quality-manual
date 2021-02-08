const fs = require('fs');
const path = require('path');
const assert = require('assert');
const jimp = require('jimp');
const pixelmatch = require('pixelmatch');
const { createScreenshotBuffer } = require('./screenshot');

const snapshotPicPath = path.join(__dirname, 'snapshot', 'page.png');

describe('Screenshot testing', function() {
  it('testing...', function(done){
    this.timeout(1000);
    createScreenshotBuffer('/index.html').then(async (buf) => {

      let actual = (await jimp.read(buf)).scale(1).quality(100).bitmap;
      let expected = (await jimp.read(fs.readFileSync(snapshotPicPath))).bitmap;
      let diff = actual;
      let failedPixel = pixelmatch(expected.data, actual.data, diff.data, actual.width, actual.height);
      assert.ok(failedPixel === 0);
      done();
    }).catch(done);
  });
});