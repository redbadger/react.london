const fetchMock = require('fetch-mock');
import { expect } from 'chai';
import { getContent, loadFromDB, populateView } from './index.js';
import { call, put } from 'redux-saga/effects';
import { getDocId, getDoc, saveDoc, syncDatabase } from '../api';
import { initialize, change } from 'redux-form';

describe.only('getContent', () => {
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

describe('Content actions', () => {
  let stubbedFetch;

  // TODO: remove hardcoded localhost url
  const contentUrl = 'http://localhost:8080/content';

  beforeEach(() => {
    stubbedFetch = fetchMock.mock(contentUrl, {
      body: {
        userText: 'awesome',
      },
    });
  });

  afterEach(() => {
    fetchMock.restore;
  });



  const myContent = {
    aboutTitle: 'stuff for aboutTitle',
  };

  const getContentSaga = getContent();
  const docId = '12345';
  const content = {};




  it('should fire appropriate actions to fetch content', () => {
    expect(getContentSaga.next().value)
      .to.eql(
        put({ type: 'GETTING_CONTENT' })
      );
    expect(getContentSaga.next().value)
      .to.eql(
        call(getDocId)
      );
    expect(getContentSaga.next(docId).value)
      .to.eql(
        call(getDoc, docId)
      );
    expect(getContentSaga.next(content).value)
      .to.eql(
        put(initialize('editor', content))
      );
  });

  it('should fetch content', () => {
    const results = makeFetch(contentUrl);
    expect(fetchMock.called(contentUrl)).to.be.true;
  });

});
