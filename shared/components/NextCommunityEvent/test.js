import React from 'react';
import NextCommunityEvent from '.';
import { shallow } from 'enzyme';

describe('NextCommunityEvent component', () => {
  it('renders successfully', () => {
    const props = {
      eventTitle: 'The best event yet',
      eventAddress: '123 Old Street',
      eventDate: 'Tomorrow!',
      eventStartTime: '6pm',
      eventEndTime: '9pm',
    };
    shallow(<NextCommunityEvent {...props} />);
  });
});
