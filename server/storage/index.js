//
// A key-value store module that abstracts over several backends.
//

let doPut;
let doGet;

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
