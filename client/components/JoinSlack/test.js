import React from 'react';
import JoinSlack from '.';
import { shallow } from 'enzyme';

describe('JoinSlack component', () => {
  it('renders successfully', () => {
    shallow(<JoinSlack />);
  });
});
