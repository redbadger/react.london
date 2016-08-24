import React from 'react';
import { shallow } from 'enzyme';
import CodeOfConduct from '.';

describe('ConferenceCodeOfConduct component', () => {
  it('renders successfully with no props', () => {
    shallow(<CodeOfConduct />);
  });
});
