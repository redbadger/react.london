import React from 'react';
import MailingList from '.';
import { shallow } from 'enzyme';

function setup({ page }) {
  const props = {
    page,
  };
  const output = shallow(<MailingList {...props} />);
  return { props, output };
}

describe.only('MailingList component', () => {
  it('renders successfully', () => {
    const props = {
      mailingListTitle: 'Hear more about events',
      mailingListSummary: 'They are going to be great!',
      page: 'conference',
    };
    shallow(<MailingList {...props} />);
  });

  it('uses the correct form action', () => {
    const props = {
      mailingListTitle: 'Hear more about events',
      mailingListSummary: 'They are going to be great!',
      page: 'conference',
    };
    const { output } = setup({ ...props });
    const element = output.find('form');
    expect(element.props().action.indexOf(props.page)).to.not.equal(-1);
  });

  it('assigns the submit button the correct class', () => {
    const props = {
      mailingListTitle: 'Hear more about events',
      mailingListSummary: 'They are going to be great!',
      page: 'conference',
    };
    const { output } = setup({ ...props });
    const element = output.find('input').last();
    expect(element.props().className.indexOf('--' + props.page)).to.not.equal(-1);
  });

  it('assigns the section the correct class', () => {
    const props = {
      mailingListTitle: 'Hear more about events',
      mailingListSummary: 'They are going to be great!',
      page: 'conference',
    };
    const { output } = setup({ ...props });
    const element = output.find('section').last();
    expect(element.props().className.indexOf('--' + props.page)).to.not.equal(-1);
  });

  it('assigns the submit button the correct class', () => {
    const props = {
      mailingListTitle: 'Hear more about events',
      mailingListSummary: 'They are going to be great!',
      page: 'conference',
    };
    const { output } = setup({ ...props });
    const element = output.find('input').last();
    expect(element.props().className.indexOf('--' + props.page)).to.not.equal(-1);
  });
});
