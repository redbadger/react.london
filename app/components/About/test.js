import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

function setup({ title, summary }) {
  const props = {
    title,
    summary,
  };
  const output = shallow(<About {...props} />);
  return { props, output };
}


describe('About', () => {
  it('does not render the heading ', () => {
    const { output } = setup({ title: undefined });
    const element = output.find('h1').nodes[0];
    expect(element.props.children).to.equal(undefined);
  });

  it('renders the heading with a title if there is one', () => {
    const { output } = setup({ title: 'A title!' });
    const element = output.find('h1').nodes[0];
    expect(element.props.children).to.equal('A title!');
  });

  it('does not render the HTML summary if there is none', () => {
    const { output } = setup({ summary: undefined });
    const element = output.find('div').nodes[0];
    expect(element.props.children).to.equal(undefined);
    expect(element.props.dangerouslySetInnerHTML.__html).to.equal(undefined);
  });

  it('renders the HTML summary if there is one', () => {
    const { output } = setup({ summary: 'Lorem ipsum yo' });
    const element = output.find('div').nodes[0];
    expect(element.props.children).to.equal(undefined);
    const html = element.props.dangerouslySetInnerHTML.__html;
    expect(html).to.equal('Lorem ipsum yo');
  });
});
