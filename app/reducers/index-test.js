import { expect } from 'chai';
import { createStore } from 'redux';
import { persistentStore } from 'redux-pouchdb-plus';
import PouchDB from 'pouchdb';
import * as reducer from './index';

describe('Reducers', () => {

  const dataID = 'combination';

  const createMocks = () => {
    const db = new PouchDB('testdb', { db: require('memdown') });
    const enhancer = persistentStore({ db: db });

    return {
      db: db,
      store: createStore(reducer.default, undefined, enhancer)
    };
  };

  const timeout = (delay) => {
    // Not ideal, but it does the trick while I'm a relative noob
    return new Promise(resolve => {
      setTimeout(() => resolve(), delay);
    });
  };

  it('returns the default application state', () => {
    expect(reducer.default(undefined, {})).to.deep.eql({
      deploy: {
        inProgress: false,
        wasSuccessful: false,
      },
      form: {}
    });
  });

  it('initializes with an empty local database', () => {
    const mock = createMocks();

    return timeout(50).then(() => {
      return mock.db.allDocs();
    }).then(docs => {
      expect(docs.rows.length).to.eql(1);
      expect(docs.rows[0].id).to.eql(dataID);
      expect(docs.rows[0].state).to.eql(undefined);
    }).then(() => {
      mock.db.destroy();
    });
  });

  describe('when application state changes', () => {
    it('stores the entire state in the local database', () => {
      const mock = createMocks();

      mock.store.dispatch({ type: 'PERSIST_DATA' });

      return timeout(50).then(() => {
        return mock.db.get(dataID);
      }).then(doc => {
        expect(doc.state).to.deep.eql(mock.store.getState());
      }).then(() => {
        mock.db.destroy();
      });
    });
  })

  describe('deployingReducer', () => {
    it('changes inProgress to true when DEPLOY_CONTENT action dispatched', () => {
      const action = {
        type: 'DEPLOY_CONTENT'
      }
      expect(reducer.default(undefined, action).deploy).to.contain({
        inProgress: true
      });
    });

    it('changes inProgress to false and wasSuccessful to true when DEPLOY_CONTENT_SUCCESSFUL action dispatched', () => {
      const action = {
        type: 'DEPLOY_CONTENT_SUCCESSFUL'
      }
      expect(reducer.default(undefined, action).deploy).to.deep.eql({
        inProgress: false,
        wasSuccessful: true,
      });
    });

    it('changes inProgress to false and wasSuccessful to false when DEPLOY_CONTENT_FAILED action dispatched', () => {
      const action = {
        type: 'DEPLOY_CONTENT_FAILED'
      }
      expect(reducer.default(undefined, action).deploy).to.deep.eql({
        inProgress: false,
        wasSuccessful: false,
      });
    });

  })
});
