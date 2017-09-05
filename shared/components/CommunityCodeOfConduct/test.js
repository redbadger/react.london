import React from 'react';
import { shallow } from 'enzyme';
import CommunityCodeOfConduct from '.';

describe('CommunityCodeOfConduct component', () => {
  it('renders successfully with no props', () => {
    shallow(<CommunityCodeOfConduct />);
  });
});
