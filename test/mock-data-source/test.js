import deepFreeze from 'deep-freeze';
import communityFixture from '../fixtures/badger-brain-payload.json';
import conferenceFixture from '../fixtures/bb-conference-payload.json';
import { getCommunityState, getConferenceState } from '../../server/data';
import { useDummyData } from '.';

deepFreeze(communityFixture);
deepFreeze(conferenceFixture);

describe('data/dummy-source useDummyData', () => {
  it('uses fixture community data by default.', () => {
    useDummyData();
    return getCommunityState()
      .then(data => {
        expect(data).to.deep.equal(communityFixture.data);
      });
  });

  it('uses fixture conference data by default.', () => {
    useDummyData();
    return getConferenceState()
      .then(data => {
        expect(data).to.deep.equal(conferenceFixture.data);
      });
  });

  it('can use other data if passed', () => {
    useDummyData({ community: { data: 'value' } });
    return getCommunityState()
      .then(data => {
        expect(data).to.deep.equal('value');
      });
  });
});
