import Speakers from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('Speakers component', () => {
  it('renders successfully with collections', () => {
    const props = {
      eventSpeakers: [
        {
          name: 'Sarah',
          company: 'Green Elephant',
          talkTitle: 'Clean GenServer APIs',
          talkSummary: 'Making your processes developer friendly',
          twitterHandle: 'foo',
          githubHandle: 'bar',
          blogURL: 'https://foo.bar',
        },
      ],
    };
    shallow(<Speakers {...props} />);
  });

  it('renders successfully without collections', () => {
    shallow(<Speakers />);
  });
});
