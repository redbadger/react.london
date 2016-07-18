import dummyState from './mock-data.json';

export function getSiteState() {
  return new Promise(resolve => resolve(dummyState.data));
}
