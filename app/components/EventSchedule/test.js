import EventSchedule from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('EventSchedule component', () => {
  it('renders successfully with collections', () => {
    const props = {
      eventSchedule: [
        { time: '6pm', text: 'Do things' },
        { time: '9pm', text: 'Do stuff' },
      ],
    };
    shallow(<EventSchedule {...props} />);
  });

  it('renders successfully without collections', () => {
    shallow(<EventSchedule />);
  });
});
