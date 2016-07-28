import React from 'react';
import EventStatus from '.';
import { shallow } from 'enzyme';

const props = {
  ticketsAvailable: true,
  externalLinks: [
    {
      title: 'foo baz',
      url: 'foobaz.com',
      type: 'OTHER',
    },
  ],
  startDateTime: {
    iso: '2016-07-26T08:30:00+0000',
  },
  endDateTime: {
    iso: '2016-07-26T08:30:00+0000',
  },
};

describe('EventStatus component', () => {
  it('renders OK with all props', () => {
    shallow(<EventStatus {...props} />);
  });

  it('renders OK without props', () => {
    shallow(<EventStatus />);
  });
});
