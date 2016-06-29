import React from 'react';
import CommunityAbout from '.';
import { shallow } from 'enzyme';

function setup({ communitySummary }) {
  const props = {
    communitySummary,
  };
  const output = shallow(<CommunityAbout {...props} />);
  return { props, output };
}

describe('CommunityAbout component', () => {
  it('does not render the HTML communitySummary if there is none', () => {
    const { output } = setup({ communitySummary: undefined });
    const element = output.find('.About__text').nodes[0];
    expect(element.props.children).to.equal(undefined);
    expect(element.props.dangerouslySetInnerHTML.__html).to.equal(undefined);
  });

  it('renders the HTML communitySummary if there is one', () => {
    const { output } = setup({ communitySummary: 'Lorem ipsum yo' });
    const element = output.find('.About__text').nodes[0];
    expect(element.props.children).to.equal(undefined);
    const html = element.props.dangerouslySetInnerHTML.__html;
    expect(html).to.equal('Lorem ipsum yo');
  });
});
