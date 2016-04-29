import { expect } from 'chai';
import * as actions from './index.js';

describe('User text actions', () => {
  it('Should have correct properties ', () => {
    const userText = 'PartyParrot';
    const expectedAction = {
      id: 0,
      type: 'ADD_TEXT',
      userText,
    };
    expect(actions.addText(userText)).to.deep.equal(expectedAction);
  });
});
