import React from 'react';
import NextCommunityEvent, { getHeaderText } from '.';
import { shallow } from 'enzyme';
import tk from 'timekeeper';

const props = {
  title: 'July React Meetup',
  startDateTime: {
    iso: '2016-07-26T17:30:00+0000',
  },
  endDateTime: {
    iso: '2016-07-26T08:30:00+0000',
  },
  location: {
    address: 'Skills Matter, CodeNode, 10 South Place, London EC2M 7EB',
    coordinates: {
      latitude: '51.518550762323734',
      longitude: '-0.08610963821411133',
    },
  },
};

describe('NextCommunityEvent component', () => {
  it('renders OK with all props', () => {
    shallow(<NextCommunityEvent {...props} />);
  });

  it('renders OK without props', () => {
    shallow(<NextCommunityEvent />);
  });
});

describe('getHeaderText', () => {
  it('returns Last Event if the event time is before the current time', () => {
    tk.freeze(new Date(100)); // The mocked current time
    const result = getHeaderText(new Date(99));
    expect(result).to.equal('Last Event');
  });

  it('returns Next Event if the event time is after the current time', () => {
    tk.freeze(new Date(98)); // The mocked current time
    const result = getHeaderText(new Date(99));
    expect(result).to.equal('Next Event');
  });
});
