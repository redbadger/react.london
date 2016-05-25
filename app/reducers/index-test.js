import { expect } from 'chai';
import { createStore } from 'redux';
import { persistentStore } from 'redux-pouchdb-plus';
import PouchDB from 'pouchdb';
import * as reducer from './index';

describe('Reducers', () => {
  const initialState = {
    form: {}
  };

  const createMockStore = (db) => {
    const enhancer = persistentStore(db);
    return createStore(reducer.default, undefined, enhancer);
  };

  it('returns the default state', () => {
    expect(reducer.default(undefined, {})).to.deep.eql({ form: {} });
  });

  it('persists state changes to the local database', () => {
    let db = new PouchDB('testdb', { db: require('memdown') });
    const store = createMockStore({ db: db });

    const waitForStateUpdated = new Promise((resolve) => {
      store.subscribe(() => {
        resolve();
      });
    });

    store.dispatch({ type: 'TEST_PERSISTENCE' });
    
    return waitForStateUpdated.then(() => {
      return db.get('combination').then(doc => {
        expect(doc.state).to.deep.eql(store.getState());
      });
    });
  });
});
