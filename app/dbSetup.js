import PouchDB from 'pouchdb';

export const localDb = new PouchDB('reactlondon');
export const remoteDb = new PouchDB('http://localhost:5984/reactlondon');

export const syncPouch = () => {
  console.log('syncing');
  const opts = { live: true };
  localDb.replicate.to(remoteDb, opts, syncError);
  localDb.replicate.from(remoteDb, opts, syncError);
};

function syncError() {
  console.log('syncing error');
};
