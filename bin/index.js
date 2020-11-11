#!/usr/bin/env node

const yargs = require('yargs');
const fs = require('fs');
const { resolve } = require('path');
const Jimp = require('jimp');

const options = yargs
  .usage('$0 <dir> [args]')
  .option('h', { alias: 'height', describe: 'Image height, default is auto', type: 'number', default: Jimp.AUTO })
  .option('w', { alias: 'width', describe: 'Image width, default is auto', type: 'number', default: Jimp.AUTO })
  .option('q', { alias: 'quality', describe: 'Image quality, default is 80', type: 'number', default: 100 })
  .option('d', { alias: 'dist', describe: 'Image destination, default is ./processed', type: 'string', default: './processed' })
  .argv;

const cwd = options._[0] || process.cwd();
const dist = resolve(cwd, options.dist);
const quality = options.quality;
const width = options.width;
const height = options.height;

// console.log(options);

fs.readdir(cwd, (err, files) => {
  if (err) {
    console.error(err.message);
  }
  files.forEach((file) => {
    if (file.toLocaleLowerCase().endsWith('.jpg')) {
      Jimp.read(resolve(cwd, file)).then(image => {
        console.log(image);
        if (width > 0 || height > 0) {
          image.resize(width, height)
        }
        if (quality < 100) {
          image.quality(quality)
        }
        image.write(resolve(dist, file));
      }).catch(err => {
        console.error(err, file);
      });
    }
  });
});
