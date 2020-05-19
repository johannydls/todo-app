const fs = require('fs');
const appRoot = require('app-root-path');

const filepath = appRoot.path + '/logs/out.json';

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (error) {
      return cb && cb(err);
    }
  });
}

function logger(content) {
  console.log(appRoot);
  jsonReader(filepath, (err, log) => {
    if (err) {
      console.log('Error reading file:', err);
      return;
    }
    log.logs.push(content);
    log.updated_at = new Date(Date.now());

    fs.writeFile(filepath, JSON.stringify(log), err => {
      if (err) console.log('Error writing file:', err);
    });
  });
}

module.exports = { logger };