import { setBackend } from '.';

let dataStore = {};

function mockStore(key, fileContent) {
  return new Promise(resolve => {
    dataStore[key] = fileContent;
    resolve();
  });
}

function failingMockStore() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

export function useMockStore() {
  dataStore = {};
  setBackend(mockStore);
}

export function useFailingMockStore() {
  setBackend(failingMockStore);
}


export function getMockStoreValue(key) {
  return dataStore[key];
}

