import Community from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('Community component', () => {
  it('renders successfully with collections', () => {
    const props = {
      summary: 'All very important',
      mailingListTitle: 'Sign up',
      mailingListSummary: 'Learn all sort about React',
      mailingListConferenceText: 'Want to know about the conference too?',
      eventTitle: 'The best event yet',
      eventAddress: '123 Old Street',
      eventDate: 'Tomorrow!',
      eventStartTime: '6pm',
      eventEndTime: '9pm',
      eventSpeakers: [
        {
          name: 'Sarah',
          company: 'Green Elephant',
          talkTitle: 'Clean GenServer APIs',
          talkSummary: 'Making your processes developer friendly',
          twitterHandle: 'foo',
          githubHandle: 'bar',
          blogURL: 'https://foo.bar',
        },
      ],
      eventSchedule: [
        { time: '6pm', text: 'Do things' },
        { time: '9pm', text: 'Do stuff' },
      ],
      eventSponsors: [
        { websiteURL: 'barfoo', imageURL: 'slim' },
        { websiteURL: 'foobar', imageURL: 'foobar' },
      ],
      upcomingEvents: [
        {
          venue: 'codemesh',
          time: '9pm',
          date: '1915',
          title: 'Code Mesh',
        },
      ],
    };
    shallow(<Community {...props} />);
  });

  it('renders successfully without collections', () => {
    const props = {
      summary: 'All very important',
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
