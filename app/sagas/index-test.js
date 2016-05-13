const fetchMock = require('fetch-mock');
import { expect } from 'chai';
import { fetchContent, formatContent, makeFetch } from './index.js';
import { call, put } from 'redux-saga/effects';

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

  const fetchContentSaga = fetchContent();
  const formatContentSaga = formatContent();

  it('should fire appropriate actions to fetch content', () => {
    expect(fetchContentSaga.next().value).to.eql(put({ type: 'FETCHING_CONTENT' }));
    expect(fetchContentSaga.next().value).to.eql(call(makeFetch, contentUrl));
    expect(fetchContentSaga.next(myContent).value).to.eql(call(formatContent, myContent));
  });

  it('should fetch content', () => {
    const results = makeFetch(contentUrl);
    expect(fetchMock.called(contentUrl)).to.be.true;
  });

});
