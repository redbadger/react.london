import { expect } from 'chai';
import reducer from '.';

describe('Reducers', () => {
  it('returns the default application state', () => {
    const state = reducer(undefined, {});
    expect(state).to.contain.key('form');
    expect(state).to.contain.key('routing');
  });
});
