import { expect } from 'chai';
import reducer from './index.js';

describe('User text reducer', () => {
  it('Should add a user text on ADD_TEXT', () => {
    const userText = 'PartyParrot';
    const expectedAction = {
      id: 0,
      type: 'ADD_TEXT',
      userText,
    };
    expect(reducer([], expectedAction)).to.deep.equal(
      [
        { id: 0, value: 'PartyParrot', },
      ]
    );
  });
});
