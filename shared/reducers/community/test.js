import deepFreeze from 'deep-freeze';
import reducer from '.';

describe('events reducer', () => {
  it('has default state', () => {
    const prev = deepFreeze({});
    const state = reducer(undefined, prev);
    expect(state).to.deep.equal({});
  });
});
