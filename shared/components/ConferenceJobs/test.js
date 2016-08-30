import React from 'react';
import { shallow } from 'enzyme';
import ConferenceJobs from '.';

describe('ConferenceJobs component', () => {
  it('renders a no jobs message when given no props', () => {
    const wrapper = shallow(<ConferenceJobs />);
    expect(wrapper.find('.ConferenceJobs__no-jobs')).to.have.length(1);
  });

  it('renders a no jobs message when given partners without jobs', () => {
    const wrapper = shallow(<ConferenceJobs
      gold={[{jobs: []}, {jobs: []},]}
      silver={[{jobs: []}, {jobs: []},]}
      bronze={[{jobs: []}, {jobs: []},]}
      />);
    expect(wrapper.find('.ConferenceJobs__no-jobs')).to.have.length(1);
  });

  it('renders successfully when given partners with jobs', () => {
    const partnerWithJobs = {
      jobs: [{}, {}]
    }
    const wrapper = shallow(<ConferenceJobs
      gold={[partnerWithJobs, partnerWithJobs,]}
      silver={[partnerWithJobs, partnerWithJobs,]}
      bronze={[partnerWithJobs, partnerWithJobs,]}
      />);
    expect(wrapper.find('.ConferenceJobs__no-jobs')).to.have.length(0);
  });
});
