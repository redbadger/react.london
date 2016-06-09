import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';

function setup(touched = false, error) {
  const props = {
    label: "Hello label",
    field: {
      something: "Hello",
      touched,
      error
    },
  };
  const output = shallow(<TextField {...props} />);
  return { props, output }
}


describe('TextField', () => {
  it('renders the label element', () => {
    const { props, output } = setup();
    const labelField = output.find('label').nodes[0];
    expect(labelField).to.exist;
    expect(labelField.props.children).to.equal(props.label);
  });

  it('renders the input', () => {
    const { props, output } = setup();
    const input = output.find("input").nodes[0];
    expect(input).to.exist;
    expect(input.props.type).to.equal("text");
  });

  it('applies field props to input', () => {
    const { props, output } = setup();
    const fieldProps = output.find("input").nodes[0].props;
    expect(fieldProps.touched).to.equal(props.field.touched);
    expect(fieldProps.error).to.equal(props.field.error);
  });

  it('passes field error fields onto FieldError', () => {
    const { props, output } = setup();
    const fieldError = output.find("FieldError").nodes[0];
    expect(fieldError.props.touched).to.equal(props.field.touched);
    expect(fieldError.props.error).to.equal(props.field.error);
  });
});
