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

  it('Should have correct properties for upcomingMeetupName', () => {
    const userText = {
      key: 'upcomingMeetupName',
      value: 'whatever',
    };
    const expectedAction = {
      type: 'UPDATE_TEXT',
      ...userText,
    };

    expect(actions.updateText(userText).key).to.equal('upcomingMeetupName');
    expect(actions.updateText(userText).value).to.equal('whatever');
  });

  it('Should have correct properties for upcomingMeetupDetails', () => {
    const userText = {
      key: 'upcomingMeetupDetails',
      value: 'whatever',
    };
    const expectedAction = {
      type: 'UPDATE_TEXT',
      ...userText,
    };

    expect(actions.updateText(userText).key).to.equal('upcomingMeetupDetails');
    expect(actions.updateText(userText).value).to.equal('whatever');
  });

  it('Should have correct properties for upcomingMeetupWhen', () => {
    const userText = {
      key: 'upcomingMeetupWhen',
      value: 'whatever',
    };
    const expectedAction = {
      type: 'UPDATE_TEXT',
      ...userText,
    };

    expect(actions.updateText(userText).key).to.equal('upcomingMeetupWhen');
    expect(actions.updateText(userText).value).to.equal('whatever');
  });

  it('Should have correct properties for upcomingMeetupWhere', () => {
    const userText = {
      key: 'upcomingMeetupWhere',
      value: 'whatever',
    };
    const expectedAction = {
      type: 'UPDATE_TEXT',
      ...userText,
    };

    expect(actions.updateText(userText).key).to.equal('upcomingMeetupWhere');
    expect(actions.updateText(userText).value).to.equal('whatever');
  });

  it('Should have correct properties for upcomingMeetupWhereLink', () => {
    const userText = {
      key: 'upcomingMeetupWhereLink',
      value: 'whatever',
    };
    const expectedAction = {
      type: 'UPDATE_TEXT',
      ...userText,
    };

    expect(actions.updateText(userText).key).to.equal('upcomingMeetupWhereLink');
    expect(actions.updateText(userText).value).to.equal('whatever');
  });

  it('Should have correct properties for upcomingMeetupCtaText', () => {
    const userText = {
      key: 'upcomingMeetupCtaText',
      value: 'whatever',
    };
    const expectedAction = {
      type: 'UPDATE_TEXT',
      ...userText,
    };

    expect(actions.updateText(userText).key).to.equal('upcomingMeetupCtaText');
    expect(actions.updateText(userText).value).to.equal('whatever');
  });

  it('Should have correct properties for upcomingMeetupCtaLink', () => {
    const userText = {
      key: 'upcomingMeetupCtaLink',
      value: 'whatever',
    };
    const expectedAction = {
      type: 'UPDATE_TEXT',
      ...userText,
    };

    expect(actions.updateText(userText).key).to.equal('upcomingMeetupCtaLink');
    expect(actions.updateText(userText).value).to.equal('whatever');
  });

  it('Should have correct properties for upcomingMeetupStreamingText', () => {
    const userText = {
      key: 'upcomingMeetupStreamingText',
      value: 'whatever',
    };
    const expectedAction = {
      type: 'UPDATE_TEXT',
      ...userText,
    };

    expect(actions.updateText(userText).key).to.equal('upcomingMeetupStreamingText');
    expect(actions.updateText(userText).value).to.equal('whatever');
  });

  it('Should have correct properties for upcomingMeetupStreamingLink', () => {
    const userText = {
      key: 'upcomingMeetupStreamingLink',
      value: 'whatever',
    };
    const expectedAction = {
      type: 'UPDATE_TEXT',
      ...userText,
    };

    expect(actions.updateText(userText).key).to.equal('upcomingMeetupStreamingLink');
    expect(actions.updateText(userText).value).to.equal('whatever');
  });

});
