const fetchMock = require('fetch-mock');
import { expect } from 'chai';
import { getContent, loadFromDB, populateView } from './index.js';
import { call, put } from 'redux-saga/effects';
import { getDocId, getDoc, saveDoc, syncDatabase } from '../api';
import { initialize, change } from 'redux-form';

describe('getContent', () => {
  const getContentSaga = getContent();
  const content = { _id: '1234' };

  it('loads from db and populates the view with the content', () => {
    expect(getContentSaga.next().value)
      .to.eql(
        call(loadFromDB)
      );
    expect(getContentSaga.next(content).value)
      .to.eql(
        call(populateView, content)
      );
  });

  describe('loadFromDB', () => {
    const loadFromDBSaga = loadFromDB();
    const docId = '1234';

    it('requests the document id and then returns the content for given id', () => {
      expect(loadFromDBSaga.next().value)
        .to.eql(
          call(getDocId)
        );
      expect(loadFromDBSaga.next(docId).value)
        .to.eql(
          call(getDoc, docId)
        );
      expect(loadFromDBSaga.next(content))
        .to.eql({
          "done": true,
          "value": {
            "_id": '1234'
          },
        });
    })
  })

  describe('populateView', () => {
    const populateViewSaga = populateView(content);

    it('gives the editor the content and announces the success of the endeavour', () => {
      expect(populateViewSaga.next(content).value)
        .to.eql(
          put(initialize('editor', content))
        );

      expect(populateViewSaga.next().value)
        .to.eql(
          put({ type: 'GET_CONTENT_SUCCESS' })
        );
    })
  })

})
