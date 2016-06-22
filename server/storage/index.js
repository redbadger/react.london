//
// A key-value store module that abstracts over several backends.
//

const fail = () => { throw new Error('storage backend not set'); };
let doPut = fail;
let doGet = fail;

export function setBackend({ put: putFun, get: getFun }) {
  if (putFun && getFun) {
    doPut = putFun;
    doGet = getFun;
  } else {
    throw new Error('Storage backend should implement `put` and `get`');
  }
}

export function put(key, fileContent) {
  return doPut(key, fileContent);
}

export function get(key) {
  return doGet(key);
}
