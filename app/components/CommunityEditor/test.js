import React from 'react';
import { shallow } from 'enzyme';
import CommunityEditor from '.';

describe('CommunityEditor component', () => {
  const props = {
    communityProps: {
    },
    initialFormValues: {
    },
  };

  it('renders successfully', () => {
    shallow(<CommunityEditor {...props} />);
  });
});
