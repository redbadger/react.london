import React from 'react';
import { shallow } from 'enzyme';
import EventEditor from '.';

describe('EventEditor component', () => {
  it('renders successfully', () => {
    const event = { eventID: '4' };
    shallow(<EventEditor event={event} />);
  });
});
