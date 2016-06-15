import React from 'react';
import { shallow } from 'enzyme';
import EventEditor from '.';

describe('EventEditor component', () => {
  it('renders successfully', () => {
    shallow(<EventEditor params={{ eventID: '4' }} />);
  });
});
