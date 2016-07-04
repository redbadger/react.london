import React from 'react';
import CommunityAbout from '.';
import { shallow } from 'enzyme';

function setup({ summary }) {
  const props = {
    summary,
  };
  const output = shallow(<CommunityAbout {...props} />);
  return { props, output };
}

describe('CommunityAbout component', () => {
  it('does not render the HTML summary if there is none', () => {
    const { output } = setup({ summary: undefined });
    const element = output.find('.CommunityAbout__text').first();
    expect(element.text()).to.equal('');
  });

  it('renders the HTML summary if there is one', () => {
    const { output } = setup({ summary: 'Lorem ipsum yo' });
    const element = output.find('.CommunityAbout__text').first();
    expect(element.props.children).to.equal(undefined);
    const html = element.props().dangerouslySetInnerHTML.__html;
    expect(html).to.equal('Lorem ipsum yo');
  });
});
