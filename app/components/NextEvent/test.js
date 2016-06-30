import React from 'react';
import NextEvent from '.';
import { shallow } from 'enzyme';

describe('NextEvent component', () => {
  it('renders successfully', () => {
    const props = {
      eventTitle: 'The best event yet',
      eventAddress: '123 Old Street',
      eventDate: 'Tomorrow!',
      eventStartTime: '6pm',
      eventEndTime: '9pm',
    };
    shallow(<NextEvent {...props} />);
  });
});
