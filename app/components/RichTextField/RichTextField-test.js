import React from 'react';
import { shallow } from 'enzyme';
import ScribeEditor from 'react-scribe';
import RichTextField from './RichTextField';

function setup(touched = false, error) {
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

  it('passes field error fields onto FieldError', () => {
    const { props, output } = setup();
    const fieldError = output.find("FieldError").nodes[0];
    expect(fieldError.props.touched).to.equal(props.field.touched);
    expect(fieldError.props.error).to.equal(props.field.error);
  });
});
