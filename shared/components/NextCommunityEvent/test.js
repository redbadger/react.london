import React from 'react';
import NextCommunityEvent, { placeholderText, getHeaderText } from '.';
import { shallow } from 'enzyme';
import tk from 'timekeeper';
import R from 'ramda';

const fullProps = {
  title: 'July React Meetup',
  startDateTime: {
    iso: '2016-07-26T17:30:00+0000',
  },
  endDateTime: {
    iso: '2016-07-26T20:30:00+0000',
  },
  location: {
    address: 'Skills Matter, CodeNode, 10 South Place, London EC2M 7EB',
    coordinates: {
      latitude: '51.518550762323734',
      longitude: '-0.08610963821411133',
    },
  },
  calendarURL: 'http://www.google.com/cal',
};

describe('NextCommunityEvent component', () => {
  it('renders OK with all props', () => {
    const elem = shallow(<NextCommunityEvent {...fullProps} />);
    const dateElement = elem.find('.NextCommunityEvent__link--date');
    expect(dateElement.text()).to.equal('Tuesday, 26th July 2016, 18:30 – 21:30');
    expect(dateElement.props().href).to.equal('http://www.google.com/cal');
    const locText = elem.find('.NextCommunityEvent__link--place').text();
    expect(locText).to.equal(fullProps.location.address);
  });

  it('renders without crashing when passed no props', () => {
    shallow(<NextCommunityEvent />);
  });

  it('has default value for missing the date', () => {
    [
      ['startDateTime'],
      ['startDateTime', 'iso'],
    ].forEach(path => {
      const props = R.dissocPath(path, fullProps);
      const elem = shallow(<NextCommunityEvent {...props} />);
      const dateText = elem.find('.NextCommunityEvent__link--date').text();
      expect(dateText).to.equal(placeholderText,
        'Should display default date without prop ' + path.join('.'));
    });
  });

  it('has default value for missing location', () => {
    [
      ['location'],
      ['location', 'address'],
    ].forEach(path => {
      const props = R.dissocPath(path, fullProps);
      const elem = shallow(<NextCommunityEvent {...props} />);
      const dateText = elem.find('.NextCommunityEvent__link--place').text();
      expect(dateText).to.equal(placeholderText,
        'Should display default location without prop ' + path.join('.'));
    });
  });
});

describe('getHeaderText', () => {
  afterEach(() => {
    tk.reset();
  });

  it('returns Next Event if the event time is after the current time', () => {
    tk.freeze(new Date('2016-07-24T20:30:00+0000'));
    const result = getHeaderText(
      { iso: new Date('2016-07-26T17:30:00+0000') },
      { iso: new Date('2016-07-26T19:30:00+0000') }
    );
    expect(result).to.equal('Next Meetup');
  });

  it('returns Community Event if no props are passed', () => {
    const result = getHeaderText(null, null);
    expect(result).to.equal('Community Meetup');
  });

  it('returns Last Event if the event time is before the current time (sameDay)', () => {
    tk.freeze(new Date('2016-07-26T20:30:00+0000'));
    const result = getHeaderText(
      { iso: new Date('2016-07-26T17:30:00+0000') },
      { iso: new Date('2016-07-26T19:30:00+0000') }
    );
    expect(result).to.equal('Last Meetup');
  });

  it('returns Last Event if the event time is before the current time (nextDay)', () => {
    tk.freeze(new Date('2016-07-27T20:30:00+0000'));
    const result = getHeaderText(
      { iso: new Date('2016-07-26T17:30:00+0000') },
      { iso: new Date('2016-07-26T19:30:00+0000') }
    );
    expect(result).to.equal('Last Meetup');
  });

  it('returns Todays Event if the event time is today & before the end time', () => {
    tk.freeze(new Date('2016-07-26T16:30:00+0000'));
    const result = getHeaderText(
      { iso: new Date('2016-07-26T17:30:00+0000') },
      { iso: new Date('2016-07-26T19:30:00+0000') }
    );
    expect(result).to.equal('Today\'s Meetup');
  });
});
