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

  // it('Should UPDATE_TEXT for aboutTitle', () => {
  //   const expectedAction = {
  //     type: 'UPDATE_TEXT',
  //     key: 'aboutTitle',
  //     value: 'whatever',
  //   };
  //   const results = reducer(initialState, expectedAction);
  //   expect(results.aboutTitle).to.equal(expectedAction.value);
  // });

});
