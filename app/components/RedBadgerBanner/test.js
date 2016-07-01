import React from 'react';
import RedBadgerBanner from '.';
import { shallow } from 'enzyme';

describe('RedBadgerBanner component', () => {
  it('renders successfully', () => {
    shallow(<RedBadgerBanner />);
  });
});
