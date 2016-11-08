import React from 'react';
import Speaker from '.';
import { shallow } from 'enzyme';

const fullProps = {
  name: 'Jane',
  company: 'Orange Ferret',
  talkTitle: 'React in anger',
  talkSummary: 'Stuff goes bad',
  twitterHandle: 'jane',
  githubHandle: 'janegh',
  blogURL: 'http://jane.net',
  imageURL: 'whatever.png',
};

describe('Speaker component', () => {
  it('can render', () => {
    shallow(<Speaker {...fullProps} />);
  });

  it('can render without props', () => {
    shallow(<Speaker />);
  });

  it('has a fallback speaker avatar', () => {
    const props = {
      ...fullProps,
      imageURL: null,
    };
    const element = shallow(<Speaker {...props} />);
    const image = element.find('img.Speaker__photo--img');
    expect(image.props().src).to.equal('/img/PNG/SpeakerGreen.png');
  });
});
