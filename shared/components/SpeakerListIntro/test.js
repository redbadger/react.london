import React from 'react';
import SpeakerListIntro from '.';
import { shallow } from 'enzyme';

describe('SpeakerListIntro component', () => {
  it('can render', () => {
    shallow(<SpeakerListIntro />);
  });
});
