import React from 'react';
import { shallow } from 'enzyme';
import Meetup from './Meetup';

function setup(props = {}) {
  const output = shallow(<Meetup {...props} />);
  return { props, output }
}

describe('Meetup', () => {
  it('displays unescaped details when if present', () => {
    const { output } = setup({ details: 'details<b>!!!</b>' });
    const element = output.find('.details').nodes[0];
    expect(element.props.dangerouslySetInnerHTML.__html).to.equal('details<b>!!!</b>');
  });

  it('displays name if given', () => {
    const { output } = setup({ name: 'A name' });
    expect(output.text()).to.include('A name');
  });

  it('displays where link if present', () => {
    const { output } = setup({ where: { url: 'a-where-url', text: 'magic text' } });
    const element = output.find('a[href="a-where-url"]').nodes[0];
    expect(element).not.to.equal(undefined);
    expect(element.props.children).to.equal('magic text');
  });

  it('displays signup url if present', () => {
    const { output } = setup({ signup: { url: 'a-signup-url', text: 'wonderous text' } });
    const element = output.find('a[href="a-signup-url"]').nodes[0];
    expect(element).not.to.equal(undefined);
    expect(element.props.children).to.equal('wonderous text');
  });

  it('displays streaming url if present', () => {
    const { output } = setup({ streaming: { url: 'a-streaming-url', text: 'voodoo text' } });
    const element = output.find('a[href="a-streaming-url"]').nodes[0];
    expect(element).not.to.equal(undefined);
    expect(element.props.children).to.equal('voodoo text');
  });
});
