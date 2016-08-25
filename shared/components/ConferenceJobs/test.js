import React from 'react';
import { shallow } from 'enzyme';
import ConferenceJobs from '.';

describe('ConferenceJobs component', () => {
  it('renders successfully with no props', () => {
    shallow(<ConferenceJobs />);
  });
});
