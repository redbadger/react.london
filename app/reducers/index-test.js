import { expect } from 'chai';
import reducer from './index.js';

describe('User text reducer', () => {

  const initialState = {
    aboutTitle: 'London React User Group',
    aboutSummary: 'A meetup',
  };

  it('Should update aboutTitle on ADD_TEXT', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'aboutTitle',
      value: 'react.london',
    };

    const results = reducer(initialState, expectedAction);
    expect(results.aboutTitle).to.equal(expectedAction.value);
    expect(results.aboutSummary).to.equal(initialState.aboutSummary);
  });

  it('Should update aboutSummary on ADD_TEXT', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'aboutSummary',
      value: 'best thing ever!',
    };

    const results = reducer(initialState, expectedAction);
    expect(results.aboutSummary).to.equal(expectedAction.value);
    expect(results.aboutTitle).to.equal(initialState.aboutTitle);
  });

});
