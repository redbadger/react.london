import React from 'react';
import { shallow } from 'enzyme';
import ScribeEditor from 'react-scribe';
import RichTextField from './RichTextField';

function setup(touched = false, error = false) {
  const props = {
    field: {
      touched: touched,
      error: error,
      onChange: () => {},
    },
    label: "This is a label",
  }
  const output = shallow(
    <RichTextField {...props} />
  );
  return { props, output }
}

describe('RichTextField', () => {
  it('renders the label element', () => {
    const { props, output } = setup();
    const labelField = output.find('label').nodes[0];
    expect(labelField).not.to.equal(undefined);
    expect(labelField.props.children).to.equal(props.label);
  });

  it('renders the ScribeEditor', () => {
    const { props, output } = setup();
    const scribeField = output.find(ScribeEditor).nodes[0];
    expect(scribeField).not.to.equal(undefined);
  });

  it('applies field props to ScribeEditor', () => {
    const { props, output } = setup();
    const scribeFieldProps = output.find(ScribeEditor).nodes[0].props;
    expect(scribeFieldProps.touched).to.equal(props.field.touched);
    expect(scribeFieldProps.error).to.equal(props.field.error);
    expect(scribeFieldProps.onChange).to.equal(props.field.onChange);
  });

  it('does not renders errors if no errors and not touched', () => {
    const { output } = setup(false, false);
    const error = output.find('.error').nodes[0];
    expect(error).to.equal(undefined);
  });

  it('does not renders errors if they are present but field is untouched', () => {
    const { output } = setup(false, true);
    const error = output.find('.error').nodes[0];
    expect(error).to.equal(undefined);
  });

  it('does not renders error span if errors present but field is untouched', () => {
    const { output } = setup(true, false);
    const error = output.find('.error').nodes[0];
    expect(error).to.equal(undefined);
  });

  it('renders errors if there are any', () => {
    const { output } = setup(true, "My errors.");
    const error = output.find('.error').nodes[0];
    expect(error).not.to.equal(undefined);
    expect(error.props.children).to.equal("My errors.");
  });
});
