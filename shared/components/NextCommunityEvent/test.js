import React from 'react';
import NextCommunityEvent from '.';
import { shallow } from 'enzyme';

describe('NextCommunityEvent component', () => {
  it('renders successfully', () => {
    const props = {
      title: 'Example Title',
      talks: [{ name: 'name' }],
      datetime: {
        iso: 'test',
      },
    };
    shallow(<NextCommunityEvent {...props} />);
  });
});
