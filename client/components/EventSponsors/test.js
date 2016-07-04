import EventSponsors from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('EventSponsors component', () => {
  it('renders successfully with collections', () => {
    const props = {
      eventSponsors: [
        { websiteURL: 'barfoo', imageURL: 'slim' },
        { websiteURL: 'foobar', imageURL: 'foobar' },
      ],
    };
    shallow(<EventSponsors {...props} />);
  });

  it('renders successfully without collections', () => {
    shallow(<EventSponsors />);
  });
});
