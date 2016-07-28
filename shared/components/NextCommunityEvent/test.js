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
  afterEach(() => {
    tk.reset();
  });

  it('returns Next Event if the event time is after the current time', () => {
    tk.freeze(new Date('2016-07-24T20:30:00+0000'));
    const result = getHeaderText(
      new Date('2016-07-26T17:30:00+0000'),
      new Date('2016-07-26T19:30:00+0000')
    );
    expect(result).to.equal('Next Event');
  });

  it('returns Last Event if the event time is before the current time (sameDay)', () => {
    tk.freeze(new Date('2016-07-26T20:30:00+0000'));
    const result = getHeaderText(
      new Date('2016-07-26T17:30:00+0000'),
      new Date('2016-07-26T19:30:00+0000')
    );
    expect(result).to.equal('Last Event');
  });

  it('returns Last Event if the event time is before the current time (nextDay)', () => {
    tk.freeze(new Date('2016-07-27T20:30:00+0000'));
    const result = getHeaderText(
      new Date('2016-07-26T17:30:00+0000'),
      new Date('2016-07-26T19:30:00+0000')
    );
    expect(result).to.equal('Last Event');
  });

  it('returns Todays Event if the event time is today & before the end time', () => {
    tk.freeze(new Date('2016-07-26T16:30:00+0000'));
    const result = getHeaderText(
      new Date('2016-07-26T17:30:00+0000'),
      new Date('2016-07-26T19:30:00+0000')
    );
    expect(result).to.equal('Today\'s Event');
  });
});
