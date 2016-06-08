import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

function setup({ title, summary }) {
  const props = {
    title,
    summary,
  };
  const output = shallow(<About {...props} />);
  return { props, output }
}


describe('About', () => {
  it('does not render the heading ', () => {
    const { props, output } = setup({ title: undefined });
    const element = output.find('h1').nodes[0];
    expect(element.props.children).to.equal(null);
  });

  it('renders the heading with a title if there is one', () => {
    const { props, output } = setup({ title: 'A title!' });
    const element = output.find('h1').nodes[0];
    expect(element.props.children).to.equal('A title!');
  });

  it('does not render the HTML summary if there is none', () => {
    const { props, output } = setup({ summary: undefined });
    const element = output.find('div').nodes[0];
    expect(element.props.children).to.equal(undefined);
    expect(element.props.dangerouslySetInnerHTML).to.equal(null);
  });

  it('renders the HTML summary if there is one', () => {
    const { props, output } = setup({ summary: 'Lorem ipsum yo' });
    const element = output.find('div').nodes[0];
    expect(element.props.children).to.equal(undefined);
    const html = element.props.dangerouslySetInnerHTML.__html;
    expect(html).to.equal('Lorem ipsum yo');
  });
});
