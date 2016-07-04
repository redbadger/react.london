import React from 'react';
import ScheduleItem from '.';
import { shallow } from 'enzyme';

describe('ScheduleItem component', () => {
  it('renders successfully', () => {
    const props = {
      time: '9pm',
      text: 'before 10pm',
    };
    shallow(<ScheduleItem {...props} />);
  });
});
