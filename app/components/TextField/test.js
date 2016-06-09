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

  describe("Error display", () => {
    it('does not render if no errors and not touched', () => {
      const { output } = setup(false);
      const error = output.find('.error').nodes[0];
      expect(error).to.equal(undefined);
    });

    it('does not render if error present but field is untouched', () => {
      const { output } = setup(false, "error!");
      const error = output.find('.error').nodes[0];
      expect(error).to.equal(undefined);
    });

    it('does not render if no error present and field is touched', () => {
      const { output } = setup(true);
      const error = output.find('.error').nodes[0];
      expect(error).to.equal(undefined);
    });

    it('renders if present and touched', () => {
      const { output } = setup(true, "My errors.");
      const error = output.find('.error').nodes[0];
      expect(error).to.exist;
      expect(error.props.children).to.equal("My errors.");
    });
  });
});
