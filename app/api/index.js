require('es6-promise').polyfill();
require('isomorphic-fetch');

import { localDb, remoteDb } from '../dbSetup';

export const makeFetch = docId => localDb.get(docId).then(doc => doc);

export const makePut = (url, content) => fetch(url, {
    body: JSON.stringify(content),
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
  })
  .then(res => handleResponse(res))
  .then(data => data);

const handleResponse = res => {
  if (res.status >= 400)
    throw new Error(res.statusText);

  return res.json();
};
