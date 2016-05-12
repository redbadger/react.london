require('es6-promise').polyfill();
require('isomorphic-fetch');

export const makeFetch = url => fetch(url)
  .then(res => res.json())
  .then(data => data);