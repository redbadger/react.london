import { expect } from 'chai';
import * as actions from './index.js';

describe('User text actions', () => {
  it('Should have correct properties for aboutTitle', () => {
    const userText = {
      key: 'aboutTitle',
      value: 'react.london',
    };

    const expectedAction = {
      type: 'UPDATE_TEXT',
      ...userText,
    };

    expect(actions.updateText(userText).key).to.equal('aboutTitle');
    expect(actions.updateText(userText).value).to.equal('react.london');
  });

  it('Should have correct properties for aboutSummary', () => {
    const userText = {
      key: 'aboutSummary',
      value: 'best thing ever!',
    };

    const expectedAction = {
      type: 'UPDATE_TEXT',
      ...userText,
    };

    expect(actions.updateText(userText).key).to.equal('aboutSummary');
    expect(actions.updateText(userText).value).to.equal('best thing ever!');
  });
});
