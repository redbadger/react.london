//
// A data layer backend that returns mock data held in memory.
// For use in tests.
//

import communityFixture from '../fixtures/badger-brain-payload.json';
import conferenceFixture from '../fixtures/bb-conference-payload.json';
import { setDataSource } from '../../server/data';

let communityData = communityFixture;
let conferenceData = conferenceFixture;

export function getCommunityState() {
  return new Promise(resolve => resolve(communityData));
}

export function getConferenceState() {
  return new Promise(resolve => resolve(conferenceData));
}

export function useDummyData(data = {}) {
  communityData = data.community || communityFixture;
  conferenceData = data.conference || conferenceFixture;
  setDataSource({
    getCommunityState,
    getConferenceState,
  });
}
