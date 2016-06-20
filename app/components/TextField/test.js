import React from 'react';
import { shallow } from 'enzyme';
import TextField from '.';

function setup(touched = false, error) {
  const props = {
    label: 'Example Label',
    name: 'Example Name',
    touched,
    error,
  };
  const output = shallow(<TextField {...props} />);
  return { props, output };
}

describe('TextField', () => {
  it('passes the for property to the label correctly', () => {
    const { props, output } = setup();
    const label = output.find('label');
    expect(label.prop('htmlFor')).to.equal(props.name);
  });

  it('it passes the correct parameters to the input', () => {
    const { props, output } = setup();
    const input = output.find('Field');
    expect(input.prop('id')).to.equal(props.name);
    expect(input.prop('name')).to.equal(props.name);
  });
});
