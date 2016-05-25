import { localDb } from '../store';

export const getDocId = () => localDb.allDocs()
  .then(result => {
    console.log(result.rows[0].id);
    return result.rows[0].id
  })
  .catch(handleError);

export const getDoc = docId => localDb.get(docId)
  .then(doc => doc)
  .catch(handleError);

export const syncDatabase = remoteDb => localDb.sync(remoteDb, { live: true });

const handleError = error => {
  throw new Error(error);
};
