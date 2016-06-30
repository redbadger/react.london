import UpcomingEvent from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('UpcomingEvent component', () => {
  it('renders successfully', () => {
    shallow(<UpcomingEvent />);
  });
});
