import deepFreeze from 'deep-freeze';
import reducer from '.';
import { siteStateLoaded } from '../../actions/persistence';

describe('events reducer', () => {
  it('has default state', () => {
    const prev = deepFreeze({});
    const state = reducer(undefined, prev);
    expect(state).to.deep.equal({});
  });

  describe('SITE_STATE_LOADED handling', () => {
    it('overwrites the state', () => {
      const prev = deepFreeze({ title: 'React London 5' });
      const conference = { title: 'Elm' };
      const action = siteStateLoaded({ conference });
      const state = reducer(prev, action);
      expect(state).to.deep.equal({ title: 'Elm' });
    });
  });
});
