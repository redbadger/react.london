import UpcomingEvent from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('UpcomingEvent component', () => {
  it('renders successfully', () => {
    const props = {
      event: {
        venue: 'codemesh',
        time: '9pm',
        date: '1915',
        title: 'Code Mesh',
      },
      id: 1,
    };
    shallow(<UpcomingEvent {...props} />);
  });
});
