import React from 'react';
import NextCommunityEvent from '.';
import { shallow } from 'enzyme';

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
