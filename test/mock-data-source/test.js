import deepFreeze from 'deep-freeze';
import fixturePayload from '../fixtures/badger-brain-payload.json';
import { getSiteState } from '../../server/data';
import { useDummyData } from '.';

deepFreeze(fixturePayload);

describe('data/dummy-source useDummyData', () => {
  it('uses fixture data by default', done => {
    useDummyData();
    getSiteState().then(data => {
      expect(data).to.deep.equal(fixturePayload.data);
      done();
    })
    .catch(done);
  });

  it('can use other data if passed', done => {
    useDummyData({ data: 'value' });
    getSiteState().then(data => {
      expect(data).to.deep.equal('value');
      done();
    })
    .catch(done);
  });
});
