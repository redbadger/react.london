import { expect } from 'chai';
import freeze from 'deep-freeze';
import reducer from './index.js';

describe('User text reducer', () => {

  const initialState = {
    aboutTitle: 'London React User Group',
    aboutSummary: 'A meetup',
    upcomingMeetupName: 'React User Group',
    upcomingMeetupDetails: 'It\'ll be amazing',
    upcomingMeetupWhen: 'Tuesday, June 28, 2016',
    upcomingMeetupWhere: 'London',
    upcomingMeetupWhereLink: 'https://maps.google.com/maps',
    upcomingMeetupCtaText: 'For full details please see',
    upcomingMeetupCtaLink: 'http://www.meetup.com/London-React-User-Group/',
    upcomingMeetupStreamingText: 'Check out the live stream',
    upcomingMeetupStreamingLink: 'https://www.youtube.com/channel/UCHlIVrJki1BxwKe7NtFYZRg',
  };

  freeze(initialState);

  it('Should UPDATE_TEXT for aboutTitle', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'aboutTitle',
      value: 'whatever',
    };
    const results = reducer(initialState, expectedAction);
    expect(results.aboutTitle).to.equal(expectedAction.value);
  });

  it('Should UPDATE_TEXT for aboutSummary', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'aboutSummary',
      value: 'whatever',
    };
    const results = reducer(initialState, expectedAction);
    expect(results.aboutSummary).to.equal(expectedAction.value);
  });

  it('Should UPDATE_TEXT for upcomingMeetupName', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'upcomingMeetupName',
      value: 'whatever',
    };
    const results = reducer(initialState, expectedAction);
    expect(results.upcomingMeetupName).to.equal(expectedAction.value);
  });

  it('Should UPDATE_TEXT for upcomingMeetupDetails', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'upcomingMeetupDetails',
      value: 'whatever',
    };
    const results = reducer(initialState, expectedAction);
    expect(results.upcomingMeetupDetails).to.equal(expectedAction.value);
  });

  it('Should UPDATE_TEXT for upcomingMeetupWhen', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'upcomingMeetupWhen',
      value: 'whatever',
    };
    const results = reducer(initialState, expectedAction);
    expect(results.upcomingMeetupWhen).to.equal(expectedAction.value);
  });

  it('Should UPDATE_TEXT for upcomingMeetupWhere', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'upcomingMeetupWhere',
      value: 'whatever',
    };
    const results = reducer(initialState, expectedAction);
    expect(results.upcomingMeetupWhere).to.equal(expectedAction.value);
  });

  it('Should UPDATE_TEXT for upcomingMeetupWhereLink', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'upcomingMeetupWhereLink',
      value: 'whatever',
    };
    const results = reducer(initialState, expectedAction);
    expect(results.upcomingMeetupWhereLink).to.equal(expectedAction.value);
  });

  it('Should UPDATE_TEXT for upcomingMeetupCtaText', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'upcomingMeetupCtaText',
      value: 'whatever',
    };
    const results = reducer(initialState, expectedAction);
    expect(results.upcomingMeetupCtaText).to.equal(expectedAction.value);
  });

  it('Should UPDATE_TEXT for upcomingMeetupCtaLink', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'upcomingMeetupCtaLink',
      value: 'whatever',
    };
    const results = reducer(initialState, expectedAction);
    expect(results.upcomingMeetupCtaLink).to.equal(expectedAction.value);
  });

  it('Should UPDATE_TEXT for upcomingMeetupStreamingText', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'upcomingMeetupStreamingText',
      value: 'whatever',
    };
    const results = reducer(initialState, expectedAction);
    expect(results.upcomingMeetupStreamingText).to.equal(expectedAction.value);
  });

  it('Should UPDATE_TEXT for upcomingMeetupStreamingLink', () => {
    const expectedAction = {
      type: 'UPDATE_TEXT',
      key: 'upcomingMeetupStreamingLink',
      value: 'whatever',
    };
    const results = reducer(initialState, expectedAction);
    expect(results.upcomingMeetupStreamingLink).to.equal(expectedAction.value);
  });

});
