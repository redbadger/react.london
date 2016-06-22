//
// A backend for the storage module that persists data in memory.
// For use in tests
//

import { setBackend } from '.';

let dataStore = {};

function put(key, fileContent) {
  return new Promise(resolve => {
    dataStore[key] = fileContent;
    resolve();
  });
}

function get(key) {
  return new Promise(resolve => {
    resolve(dataStore[key]);
  });
}

export function useMockStore() {
  dataStore = {};
  setBackend({ put, get });
}

export function getMockStoreValue(key) {
  return dataStore[key];
}
