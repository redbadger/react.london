import React from 'react';
import NavigationBar from '.';
import { shallow } from 'enzyme';

describe('NavigationBar component', () => {
  it('renders successfully', () => {
    shallow(<NavigationBar />);
  });
});
