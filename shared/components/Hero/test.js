import React from 'react';
import Hero from '.';
import { shallow } from 'enzyme';

function setup({ page }) {
  const props = {
    page,
  };
  const output = shallow(<Hero {...props} />);
  return { props, output };
}

describe('Hero component', () => {
  it('sets the properties of the header correctly', () => {
    const page = 'Community';
    const { output } = setup({ page });
    const element = output.find('header');
    expect(element.hasClass(`Hero block Hero--${page}`)).to.equal(true);
  });

  it('sets the properties of the header correctly', () => {
    const page = 'Community';
    const { output } = setup({ page });
    const element = output.find('object');
    expect(element.props().data).to.equal(`/img/SVG/${page}_header_transparent.svg`);
  });

  it('sets the properties of the header correctly', () => {
    const page = 'Community';
    const { output } = setup({ page });
    const element = output.find('img');
    expect(element.props().srcSet).to.equal(`/img/PNG/${page}_header_transparent_x2.png`);
    expect(element.props().src).to.equal(`/img/PNG/${page}_header_transparent.png`);
  });
});
