import React from 'react';
import { shallow } from 'enzyme';
import Conference from '.';

describe('Conference component', () => {
  it('renders successfully', () => {
    shallow(<Conference />);
  });
});
