import React from 'react';
import ScheduleItem from '.';
import { shallow } from 'enzyme';

const item = {
  time: '9:40 - 11:00 am',
  title: 'Registration',
  description: 'Registration and breakfast',
  details: [
    {
      time: '9:40 - 10:20 am',
      title: 'Title 1',
    },
    {
      time: '9:40 - 10:20 am',
      title: 'Title 2',
    },
  ],
};

describe('ScheduleItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ScheduleItem item={item} />);
  });

  it('should display the time of the event', () => {
    expect(
      wrapper.containsMatchingElement(<time>9:40 - 11:00 am</time>)
    ).to.be.equal(true);
  });

  it('should display description of the event', () => {
    expect(
      wrapper.containsMatchingElement(<p>Registration and breakfast</p>)
    ).to.be.equal(true);
  });

  it('should ', () => {
    expect(
      wrapper.find('ScheduleDetail')
    ).to.have.length(2);
  });
});
