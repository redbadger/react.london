import React from 'react';
import NextCommunityEvent from '.';
import { shallow } from 'enzyme';

const props = {
  title: 'Example Title',
  talks: [{ name: 'name' }],
  datetime: {
    iso: 'test',
  },
  timestampEnd: {
    iso: 'end',
  },
};

describe('NextCommunityEvent component', () => {
  it('renders OK with all props', () => {
    shallow(<NextCommunityEvent {...props} />);
  });

  it('renders OK without props', () => {
    shallow(<NextCommunityEvent />);
  });
});
