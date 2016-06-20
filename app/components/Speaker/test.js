import React from 'react';
import Speaker from '.';
import { shallow } from 'enzyme';


describe('Speaker component', () => {
  it('can render without social links', () => {
    const props = {
      name: 'Jane',
      company: 'Orange Ferret',
      talkTitle: 'React in anger',
      talkSummary: 'Stuff goes bad',
    };
    shallow(<Speaker {...props} />);
  });

  it('can render with social links', () => {
    const props = {
      name: 'Jane',
      company: 'Orange Ferret',
      talkTitle: 'React in anger',
      talkSummary: 'Stuff goes bad',
      twitterHandle: 'jane',
      githubHandle: 'janegh',
      blogURL: 'http://jane.net',
    };
    shallow(<Speaker {...props} />);
  });
});
