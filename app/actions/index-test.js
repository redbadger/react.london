import fetch from 'isomorphic-fetch';
import { expect } from 'chai';
import {fetchContent, formatContent} from './index.js';
import { call, put } from 'redux-saga/effects';

describe('Content actions', () => {
  const myContent = {
    aboutTitle: 'stuff for aboutTitle',
  };

  const fetchContentSaga = fetchContent();
  const formatContentSaga = formatContent();

  it('should fetch content', () => {
    // fetchContentSaga.next();
    expect(fetchContentSaga.next().value).to.eql(put({ type: 'FETCHING_CONTENT' }));
    expect(fetchContentSaga.next().value).to.eql(call(fetch, '/content'));
    expect(fetchContentSaga.next(myContent).value).to.eql(call(formatContent, myContent));
  });

  it('should format the fetched content', () => {
    // mySaga.next();
    expect(formatContentSaga.next(myContent).value).to.eql(put({ type: 'FETCHED_CONTENT', payload: myContent }));
  });

});
