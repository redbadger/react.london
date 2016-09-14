import React from 'react';
import SpeakerSocialLinks from '.';
import { shallow } from 'enzyme';

const fullProps = {
  name: 'Jane',
  twitterHandle: 'jane',
  githubHandle: 'janegh',
  blogURL: 'http://jane.net',
};

describe('SpeakerSocialLinks component', () => {
  it('can render', () => {
    shallow(<SpeakerSocialLinks {...fullProps} />);
  });

  it('can render without props', () => {
    shallow(<SpeakerSocialLinks />);
  });
});
