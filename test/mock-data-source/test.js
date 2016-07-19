import deepFreeze from 'deep-freeze';
import fixtureData from '../fixtures/badger-brain-payload.json';
import { getSiteState } from '../../server/data';
import { useDummyData } from '.';

deepFreeze(fixtureData);

describe('data/dummy-source useDummyData', () => {
  it('uses fixture data by default', done => {
    useDummyData();
    getSiteState().then(data => {
      expect(data).to.deep.equal(fixtureData);
      done();
    })
    .catch(done);
  });

  it('can use other data if passed', done => {
    useDummyData({ key: 'value' });
    getSiteState().then(data => {
      expect(data).to.deep.equal({ key: 'value' });
      done();
    })
    .catch(done);
  });
});
