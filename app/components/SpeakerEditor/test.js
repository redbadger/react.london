import React from 'react';
import { shallow } from 'enzyme';
import SpeakerEditor from './SpeakerEditor';

function setup() {
  const props = {
    speakers: {},
    speaker: 'speaker prop',
    index: 1337,
  };
  const output = shallow(
    <SpeakerEditor {...props} />
  );
  return { props, output };
}


describe('SpeakerEditor', () => {
  it('renders the heading', () => {
    const { props, output } = setup();
    const element = output.find('h5').nodes[0];
    expect(element).to.exist();
    expect(element.props.children).to.deep.equal(['Talk ', props.index + 1]);
  });

  it('renders the remove button', () => {
    const { output } = setup();
    const element = output.find('button').nodes[0];
    expect(element).to.exist();
    expect(element.props.onClick).to.exist();
    expect(element.props.children).to.equal('Remove Speaker');
  });

  it('renders the fields', () => {
    const { props, output } = setup();
    const fields = output.find('Field').nodes;
    const fieldNames = fields.map(f => f.props.name).sort();
    expect(fieldNames).to.deep.equal([
      `${props.speaker}.blurb`,
      `${props.speaker}.name`,
      `${props.speaker}.picture`,
      `${props.speaker}.title`,
    ]);
  });
});
