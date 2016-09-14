import React from 'react';
import ExternalPlatforms from '.';
import { shallow } from 'enzyme';

describe('ExternalPlatforms component', () => {
  it('renders successfully', () => {
    shallow(<ExternalPlatforms />);
  });
});
