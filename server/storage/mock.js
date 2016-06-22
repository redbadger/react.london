import { setBackend } from '.';

let dataStore = {};

function mockStore(key, fileContent) {
  return new Promise(resolve => {
    dataStore[key] = fileContent;
    resolve();
  });
}

function mockGet(key) {
  return new Promise(resolve => {
    resolve(dataStore[key]);
  });
}

function failingMock() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

export function useMockStore() {
  dataStore = {};
  setBackend(mockStore, mockGet);
}

export function useFailingMockStore() {
  setBackend(failingMock, failingMock);
}


export function getMockStoreValue(key) {
  return dataStore[key];
}
