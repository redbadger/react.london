import React from 'react';
import InterestedSpeaker from '.';
import { shallow } from 'enzyme';

describe('InterestedSpeaker component', () => {
  it('renders successfully', () => {
    shallow(<InterestedSpeaker />);
  });
});
