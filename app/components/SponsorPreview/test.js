import React from 'react';
import { shallow } from 'enzyme';
import SponsorPreview from './SponsorPreview';

function setup() {
  const props = {
    name: 'This is a name!',
    url: 'https://red-badger.com/',
    picture: 'https://foo.bar/kitten.gif',
  };
  const output = shallow(<SponsorPreview {...props} />);
  return { props, output }
}


describe('SponsorPreview', () => {
  it('renders the image', () => {
    const { props, output } = setup();
    const image = output.find('img');
    expect(image.prop('src')).to.equal(props.picture);
  });

  it('renders the name', () => {
    const { props, output } = setup();
    expect(output.text()).to.contain(props.name);
  });

  it('renders the url', () => {
    const { props, output } = setup();
    expect(output.text()).to.contain(props.url);
  });
});
