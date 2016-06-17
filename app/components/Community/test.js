import Community from '.';
import React from 'react';
import { shallow } from 'enzyme';

const fieldArray = {
  fields: {
    map: () => {},
  },
};

describe('Community component', () => {
  it('renders successfully with collections', () => {
    const props = {
      communityTitle: 'A title!',
      communitySummary: 'All very important',
      mailingListTitle: 'Sign up',
      mailingListSummary: 'Learn all sort about React',
      mailingListConferenceText: 'Want to know about the conference too?',
      eventTitle: 'The best event yet',
      eventAddress: '123 Old Street',
      eventDate: 'Tomorrow!',
      eventStartTime: '6pm',
      eventEndTime: '9pm',
      eventSpeakers: fieldArray,
      eventSchedule: fieldArray,
      eventSponsors: fieldArray,
      upcomingEvents: fieldArray,
    };
    shallow(<Community {...props} />);
  });

  it('renders successfully without collections', () => {
    const props = {
      communityTitle: 'A title!',
      communitySummary: 'All very important',
      mailingListTitle: 'Sign up',
      mailingListSummary: 'Learn all sort about React',
      mailingListConferenceText: 'Want to know about the conference too?',
      eventTitle: 'The best event yet',
      eventAddress: '123 Old Street',
      eventDate: 'Tomorrow!',
      eventStartTime: '6pm',
      eventEndTime: '9pm',
    };
    shallow(<Community {...props} />);
  });
});
