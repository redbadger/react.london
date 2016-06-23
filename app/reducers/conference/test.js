import deepFreeze from 'deep-freeze';
import reducer from '.';
import { stateLoaded } from '../../actions/persistence';

describe('events reducer', () => {
  it('has default state', () => {
    const prev = deepFreeze({});
    const state = reducer(undefined, prev);
    expect(state).to.deep.equal({});
  });

  describe('STATE_LOADED handling', () => {
    it('adds the event when the ID is new', () => {
      const prev = deepFreeze({ title: 'React London 5' });
      const conference = { title: 'Elm' };
      const action = stateLoaded({ conference });
      const state = reducer(prev, action);
      expect(state).to.deep.equal({ title: 'Elm' });
    });
  });
});
