import fetch from 'isomorphic-fetch';
import { expect } from 'chai';
import { fetchContent, formatContent, makeFetch } from './index.js';
import { call, put } from 'redux-saga/effects';

describe('Content actions', () => {
  let stubbedFetch;

  const contentUrl = 'http://localhost:8080/content'; 

  beforeEach(() => {
    stubbedFetch = fetchMock.mock(contentUrl, 200);
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
    // TODO: remove hardcoded localhost url
    expect(fetchContentSaga.next().value).to.eql(call(makeFetch, contentUrl));
    expect(fetchContentSaga.next(myContent).value).to.eql(call(formatContent, myContent));
  });

  it('should fetch content', () => {
    makeFetch(contentUrl);
    expect(fetchMock.called(contentUrl)).to.be.true;
    // mySaga.next();
    // expect(formatContentSaga.next(myContent).value).to.eql(put({ type: 'FETCHED_CONTENT', payload: myContent }));
  });

});
