import React from 'react';
import { shallow } from 'enzyme';
import CommunityEditor from '.';

describe('CommunityEditor component', () => {
  it('renders successfully', () => {
    shallow(<CommunityEditor />);
  });
});
