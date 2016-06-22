//
// A key-value store module that abstracts over several backends.
//

const fail = () => { throw new Error('storage backend not set'); };
let doPut = fail;
let doGet = fail;

export function setBackend(putFunc, getFunc) {
  doPut = putFunc;
  doGet = getFunc;
}

export function put(key, fileContent) {
  return doPut(key, fileContent);
}

export function get(key) {
  return doGet(key);
}
