import {
  getCommunityState,
  getConferenceState,
  badgerBrainURL,
  communityStateQuery,
  conferenceStateQuery,
} from './badger-brain';

describe('data/badger-brain backend getCommunityState', () => {
  it('uses the http client to query badger brain', () => {
    const postFn = (url, query) => {
      expect(url).to.equal(badgerBrainURL);
      expect(query).to.equal(communityStateQuery);
    };
    return getCommunityState(postFn);
  });
});

describe('data/badger-brain backend getCommunityState', () => {
  it('uses the http client to query badger brain', () => {
    const postFn = (url, query) => {
      expect(url).to.equal(badgerBrainURL);
      expect(query).to.equal(conferenceStateQuery);
    };
    return getConferenceState(postFn);
  });
});
