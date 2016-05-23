const fetchMock = require('fetch-mock');
import { expect } from 'chai';
import { getContent, loadFromDB, populateView } from './index.js';
import { call, put } from 'redux-saga/effects';
import { getDocId, getDoc, saveDoc, syncDatabase } from '../api';
import { initialize, change } from 'redux-form';

describe('getContent', () => {
  const getContentSaga = getContent();

  it('loads from db and populate the view', () => {
    expect(getContentSaga.next().value)
      .to.eql(
        call(loadFromDB)
      );
    expect(getContentSaga.next().value)
      .to.eql(
        call(populateView)
      );
  });
})

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
  })
})
