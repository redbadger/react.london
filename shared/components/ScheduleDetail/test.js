import React from 'react';
import ScheduleDetail from '.';
import { shallow } from 'enzyme';

const detail = {
  time: '9:40 - 10:20 am',
  title: 'Computer Hardware Desktops And Notebooks And Handhelds Oh My',
  description: 'Stu is a founder with a delivery focus.',
  speaker: {
    name: 'Christopher Chedau',
    id: 'vjeux',
    company: 'Facebook',
  },
};

describe('ScheduleDetail', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ScheduleDetail detail={detail} />);
  });

  it('should display the title along wi the time of the detail', () => {
    expect(
      wrapper.containsMatchingElement(
        <h4>
          <time>9:40 - 10:20 am</time>
          Computer Hardware Desktops And Notebooks And Handhelds Oh My
        </h4>
      )
    ).to.be.equal(true);
  });

  it('should display description of the detail', () => {
    expect(
      wrapper.containsMatchingElement(
        <p>Stu is a founder with a delivery focus.</p>
      )
    ).to.be.equal(true);
  });

  it('should display speaker\'s company name', () => {
    expect(
      wrapper.containsMatchingElement(
        <span>Facebook</span>
      )
    ).to.be.equal(true);
  });
});
