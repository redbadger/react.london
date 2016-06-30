import UpcomingEvents from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('UpcomingEvents component', () => {
  it('renders successfully with collections', () => {
    const props = {
      upcomingEvents: [
        {
          venue: 'codemesh',
          time: '9pm',
          date: '1915',
          title: 'Code Mesh',
        },
      ],
    };
    shallow(<UpcomingEvents {...props} />);
  });

  it('renders successfully without collections', () => {
    shallow(<UpcomingEvents />);
  });
});
