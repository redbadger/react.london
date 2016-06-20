import Home from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('Home component', () => {
  it('renders successfully', () => {
    shallow(<Home />);
  });
});
