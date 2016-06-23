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
      const prev = deepFreeze({ 5: { title: 'React London 5' } });
      const community = { foo: 1, bar: 2 };
      const action = stateLoaded({ community });
      const state = reducer(prev, action);
      expect(state).to.deep.equal({ foo: 1, bar: 2 });
    });
  });
});
