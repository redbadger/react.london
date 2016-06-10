import { expect } from 'chai';
import { createStore } from 'redux';
import { persistentStore } from 'redux-pouchdb-plus';
import PouchDB from 'pouchdb';
import * as reducer from './index';
import memdown from 'memdown';

describe('Reducers', () => {
  const dataID = 'combination';

  const createMocks = () => {
    const db = new PouchDB('testdb', { db: memdown });
    const enhancer = persistentStore({ db });

    return {
      store: createStore(reducer.default, undefined, enhancer),
      db,
    };
  };

  const timeout = (delay) => (
    // Not ideal, but it does the trick while I'm a relative noob
    new Promise(resolve => {
      setTimeout(() => resolve(), delay);
    })
  );

  it('returns the default application state', () => {
    expect(reducer.default(undefined, {})).to.deep.eql({ form: {} });
  });

  it('initializes with an empty local database', () => {
    const mock = createMocks();

    return timeout(50).then(() => {
      return mock.db.allDocs();
    }).then(docs => {
      expect(docs.rows.length).to.eql(1);
      expect(docs.rows[0].id).to.eql(dataID);
      expect(docs.rows[0].state).to.eql(undefined);
    })
    .then(() => {
      mock.db.destroy();
    });
  });

  describe('when application state changes', () => {
    it('stores the entire state in the local database', () => {
      const mock = createMocks();

      mock.store.dispatch({ type: 'PERSIST_DATA' });

      return timeout(50).then(() => {
        return mock.db.get(dataID);
      })
      .then(doc => {
        expect(doc.state).to.deep.eql(mock.store.getState());
      })
      .then(() => {
        mock.db.destroy();
      });
    });
  });
});
