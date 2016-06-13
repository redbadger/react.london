import React from 'react';
import { shallow } from 'enzyme';
import SpeakerPreview from './SpeakerPreview';

function setup() {
  const props = {
    title: 'Very important title',
    name: 'This is a name!',
    blurb: 'Lorem <b>ipsum etc',
    picture: 'https://foo.bar/kitten.gif',
  };
  const output = shallow(<SpeakerPreview {...props} />);
  return { props, output };
}


describe('SpeakerPreview', () => {
  it('sets the image source', () => {
    const { props, output } = setup();
    const imageSrc = output.find('img').prop('src');
    expect(imageSrc).to.equal(props.picture);
  });

  it('renders the title', () => {
    const { props, output } = setup();
    const titleText = output.find('h4').text();
    expect(titleText).to.equal(props.title);
  });

  it('renders the name', () => {
    const { props, output } = setup();
    expect(output.text()).to.include(props.title);
  });

  it('renders the blurb HTML', () => {
    const { props, output } = setup();
    const blurb = output.find('.blurb');
    expect(blurb.html()).to.include(props.blurb);
  });
});
