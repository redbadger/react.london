import React from 'react';
import { NextConferenceEvent, getCurrentTicket } from '.';
import { shallow } from 'enzyme';

import tk from 'timekeeper';

const fullProps = {
  calendarURL: 'http://www.google.com/cal',
};

describe('NextConferenceEvent component', () => {
  it('renders OK with all props', () => {
    const elem = shallow(<NextConferenceEvent {...fullProps} />);
    const dateElement = elem.find('.NextConferenceEvent__link--date');
    expect(dateElement.props().href).to.equal('http://www.google.com/cal');
  });

  it('renders without crashing when passed no props', () => {
    shallow(<NextConferenceEvent />);
  });
});

describe('getCurrentTicket', () => {
  const tickets = [
    {
      title: 'Early bird', // current ticket
      releaseDate: {
        iso: '2016-09-04T23:00:00+0000',
      },
    },
    {
      title: 'Standard ticket', // future ticket
      releaseDate: {
        iso: '2016-10-02T23:00:00+0000',
      },
    },
    {
      title: 'Super Early Bird', // old ticket
      releaseDate: {
        iso: '2016-08-02T23:00:00+0000',
      },
    },
  ];

  it.only('determines the currently active ticket', () => {
    tk.freeze(new Date('2016-09-22T12:00:00+0000'));
    const currentTicket = getCurrentTicket(tickets);
    expect(currentTicket).to.equal('2016-09-04T23:00:00+0000');
  });

  afterEach(() => {
    tk.reset();
  });
});
