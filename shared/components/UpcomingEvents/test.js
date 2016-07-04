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
    const element = shallow(<UpcomingEvents {...props} />);
    expect(element.find('UpcomingEvent')).to.have.length(1);
  });

  it('renders successfully without collections', () => {
    const element = shallow(<UpcomingEvents upcomingEvents={[]} />);
    expect(element.find('UpcomingEvent')).to.have.length(0);
  });
});
