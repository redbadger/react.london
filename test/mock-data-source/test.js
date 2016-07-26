import deepFreeze from 'deep-freeze';
import fixturePayload from '../fixtures/badger-brain-payload.json';
import { getSiteState } from '../../server/data';
import { useDummyData } from '.';

deepFreeze(fixturePayload);

describe('data/dummy-source useDummyData', () => {
  it('uses fixture data by default.', () => {
    useDummyData();
    return getSiteState()
      .then(data => {
        expect(data).to.deep.equal(fixturePayload.data);
      });
  });

  it('can use other data if passed', () => {
    useDummyData({ data: 'value' });
    return getSiteState()
      .then(data => {
        expect(data).to.deep.equal('value');
      });
  });
});
