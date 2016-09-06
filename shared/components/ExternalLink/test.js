
import React from 'react';
import { ExternalLink } from '.';
import { shallow } from 'enzyme';

describe('ExternalLink component', () => {
  it('renders OK with all props', () => {
    const fullProps = {
      href: 'http://www.google.com',
      children: 'Example Text',
    };
    const elem = shallow(<ExternalLink {...fullProps} />);
    const dateElement = elem.find('a');
    expect(dateElement.props().href).to.equal(fullProps.href);
    expect(dateElement.text()).to.equal('Example Text');
  });

  it('renders without a href if no href is passed', () => {
    const props = {
      children: 'Example Text',
    };
    const elem = shallow(<ExternalLink {...props} />);
    const dateElement = elem.find('a');
    expect(dateElement.props().href).to.equal(undefined);
  });

  it('it adds http:// infront of an href if it does not already contain it', () => {
    const props = {
      children: 'Example Text',
      href: 'google.com',
    };
    const elem = shallow(<ExternalLink {...props} />);
    const dateElement = elem.find('a');
    expect(dateElement.props().href).to.equal('http://' + props.href);
  });
});

