import React from 'react';
import NextConferenceEvent from '.';
import { shallow } from 'enzyme';

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
