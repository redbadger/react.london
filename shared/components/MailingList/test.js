import React from 'react';
import MailingList from '.';
import { shallow } from 'enzyme';

const defaultProps = Object.freeze({
  mailingListTitle: 'Hear more about events',
  page: 'conference',
});

function setup({ page }) {
  const props = {
    page,
  };
  const output = shallow(<MailingList {...props} />);
  return { props, output };
}

describe('MailingList component', () => {
  it('uses the correct form action', () => {
    const { output } = setup(defaultProps);
    const element = output.find('form');
    expect(element.props().action).to.include(defaultProps.page);
  });

  it('assigns the submit button the correct class', () => {
    const { output } = setup(defaultProps);
    const element = output.find('input').last();
    expect(element.props().className).to.include('--' + defaultProps.page);
  });

  it('assigns the section the correct class', () => {
    let { output } = setup({ ...defaultProps, page: 'conference' });
    let element = output.find('section').last();
    expect(element.props().className).to.include('--conference');
    output = setup({ ...defaultProps, page: 'community' }).output;
    element = output.find('section').last();
    expect(element.props().className).to.include('--community');
  });

  it('assigns the submit button the correct class', () => {
    const { output } = setup(defaultProps);
    const element = output.find('input').last();
    expect(element.props().className).to.include('--' + defaultProps.page);
  });

  it('does not have an explicit input value, so a user can type in it', () => {
    const { output } = setup(defaultProps);
    const input = output.find('input.MailingList__form__email').last();
    expect(input.props().value).to.be.undefined();
  });
});
