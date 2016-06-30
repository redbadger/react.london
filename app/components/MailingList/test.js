import React from 'react';
import MailingList from '.';
import { shallow } from 'enzyme';

describe('MailingList component', () => {
  it('renders successfully', () => {
    const props = {
     mailingListTitle: 'Hear more about events',
     mailingListSummary: 'They are going to be great!',
    };
    shallow(<MailingList {...props} />);
  });
});
