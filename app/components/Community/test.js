import Community from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('Community component', () => {
  it('renders successfully', () => {
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
      eventSpeakers: {},
      eventSchedule: {},
      eventSponsors: {},
      upcomingEvents: {},
    };
    shallow(<Community {...props} />);
  });
});
