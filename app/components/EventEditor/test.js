import React from 'react';
import { shallow } from 'enzyme';
import EventEditor from '.';

describe('EventEditor component', () => {
  it('renders successfully', () => {
    const params = { eventID: '4' };
    shallow(<EventEditor params={params} />);
  });
});
