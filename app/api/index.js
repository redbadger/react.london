require('es6-promise').polyfill();
require('isomorphic-fetch');

import { localDb } from '../dbSetup';

export const makeFetch = docId => localDb.get(docId)
  .then(doc => doc)
  .catch(err => {
    throw new Error(err);
  });

export const makePut = content => localDb.put(content)
  .then(data => data)
  .catch(err => {
    throw new Error(err);
  });
