import React from 'react';
import { shallow } from 'enzyme';
import SiteFooter from '.';

describe('SiteFooter component', () => {
  it('renders', () => {
    shallow(<SiteFooter />);
  });
});
