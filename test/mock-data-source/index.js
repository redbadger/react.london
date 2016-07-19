//
// A data layer backend that returns mock data held in memory.
// For use in tests.
//

import fixtureData from '../fixtures/badger-brain-payload.json';
import { setDataSource } from '../../server/data';

let data = fixtureData;

export function getSiteState() {
  return new Promise(resolve => resolve(data));
}

export function useDummyData(newData = fixtureData) {
  data = newData;
  setDataSource({ getSiteState });
}
