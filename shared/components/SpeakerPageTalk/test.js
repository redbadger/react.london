import React from 'react';
import SpeakerPageTalk from '.';
import { shallow } from 'enzyme';

const fullProps = {

  id: '1',
  title: 'test talk',
  summary: 'talk summary',
  speakers: [{
    name: 'Jane',
    company: 'Orange Ferret',
    talkTitle: 'React in anger',
    talkSummary: 'Stuff goes bad',
    twitterHandle: 'jane',
    githubHandle: 'janegh',
    blogURL: 'http://jane.net',
    imageURL: 'whatever.png',
  }],
};

describe('Speaker talk component', () => {
  it('can render', () => {
    shallow(<SpeakerPageTalk {...fullProps} />);
  });
});
