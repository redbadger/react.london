import { expect } from 'chai';
import { createStore } from 'redux';
import { persistentStore } from 'redux-pouchdb-plus';
import PouchDB from 'pouchdb';
import * as reducer from './index';

describe('Reducers', () => {
  const initialState = {
    initialValues: { loading: true },
    form: {}
  };

  const actionCreator = () => {
    return { type: 'TEST_PERSISTENCE' };
  };

  const createMockStore = (db) => {
    const enhancer = persistentStore(db);
    return createStore(reducer.default, undefined, enhancer);
  };

  it('returns the default state', () => {
    expect(reducer.default(undefined, {})).to.deep.eql(initialState);
  });

  it('persists state changes to the local database', () => {
    let db = new PouchDB('testdb', { db: require('memdown') });
    const store = createMockStore({ db: db });

    store.dispatch(actionCreator());

    return db.get('combination').then(doc => {
      expect(doc._id).to.eql('combination');
      expect(doc.state).to.deep.eql(initialState);
    }).then(() => {
      db.destroy();
    });
  });
});
