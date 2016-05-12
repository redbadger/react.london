const fetchMock = require('fetch-mock');
import { expect } from 'chai';
import { makeFetch } from './index.js';

describe('Content actions', () => {
  let stubbedFetch;

  // TODO: remove hardcoded localhost url
  const contentUrl = 'http://localhost:8080/content'; 

  beforeEach(() => {
    stubbedFetch = fetchMock.mock(contentUrl, {
      body: {
        userText: 'awesome',
      }
    });
  });

  afterEach(() => {
    fetchMock.restore;
  });

  it('should fetch content', () => {
    const results = makeFetch(contentUrl);
    expect(fetchMock.called(contentUrl)).to.be.true;
  });

});
