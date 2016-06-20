import React from 'react';
import { shallow } from 'enzyme';
import FieldError from './index';

function setup({ touched, error }) {
  const props = {
    touched, error,
  };
  const output = shallow(
    <FieldError {...props} />
  );
  return { props, output };
}

describe('FieldError', () => {
  it('it renders nothing with no error and untouched', () => {
    const { output } = setup({ touched: false });
    expect(output.node).to.equal(null);
  });

  it('it renders nothing with error and untouched', () => {
    const { output } = setup({ error: 'an error!', touched: false });
    expect(output.node).to.equal(null);
  });

  it('it renders nothing with no error, even if touched', () => {
    const { output } = setup({ touched: true });
    expect(output.node).to.equal(null);
  });

  it('it renders if error present and touched', () => {
    const { output } = setup({ error: 'An error!', touched: true });
    expect(output.text()).to.equal('An error!');
  });
});
