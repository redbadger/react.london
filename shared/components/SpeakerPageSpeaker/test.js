import React from 'react';
import SpeakerPageTalk from '.';
import { shallow } from 'enzyme';

const fullProps = {
  name: 'Jane',
  company: 'Orange Ferret',
  twitterHandle: 'jane',
  githubHandle: 'janegh',
  blogURL: 'http://jane.net',
  imageURL: 'whatever.png',
  talks: [],
};

describe('Speaker talk component', () => {
  it('can render', () => {
    shallow(<SpeakerPageTalk {...fullProps} />);
  });
});
