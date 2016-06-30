//
// A backend for the storage module that persists data as files on the local
// file system.
// For use in dev.
//

import { setBackend } from '.';
import mkdirp from 'mkdirp';
import path from 'path';
import fs from 'fs';

function writeFile(target, contents, cb) {
  mkdirp(path.dirname(target), (err) => {
    if (err) {
      cb(err);
    } else {
      fs.writeFile(target, contents, cb);
    }
  });
}

function put(key, fileContent) {
  return new Promise((resolve, reject) => {
    writeFile(`tmp/${key}`, fileContent, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function get(key) {
  return new Promise((resolve, reject) => {
    fs.readFile(`tmp/${key}`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function useDiskStore() {
  setBackend({ put, get });
}
