require('es6-promise').polyfill();
require('isomorphic-fetch');
import PouchDB from 'pouchdb';

export const localDb = new PouchDB('reactlondon');

export const getDocId = () => localDb.allDocs()
  .then(result => {
    console.log(result.rows[0].id);
    return result.rows[0].id
  })
  .catch(handleError);

export const getDoc = docId => localDb.get(docId)
  .then(doc => doc)
  .catch(handleError);

export const saveDoc = content => localDb.put(content)
  .then(data => data)
  .catch(handleError);

export const syncDatabase = url => localDb.sync(new PouchDB(url), { live: true });

const handleError = error => {
  throw new Error(error);
};
