import React from 'react';
import { shallow } from 'enzyme';
import EventEditor from '.';

describe('EventEditor component', () => {
  it('renders successfully', () => {
    const props = {
      eventID: '4',
      eventPreviewProps: {},
      initialFormValues: {},
    };
    shallow(<EventEditor {...props} />);
  });
});
