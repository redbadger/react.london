import React from 'react';
import { shallow } from 'enzyme';
import SiteFooter from '.';

describe('SiteFooter component', () => {
  it('renders as Community', () => {
    shallow(<SiteFooter page="Community" />);
  });

  it('renders as Conference', () => {
    shallow(<SiteFooter page="Conference" />);
  });
});
