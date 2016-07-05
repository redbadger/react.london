import React from 'react';
import CommunityAbout from '.';
import { shallow } from 'enzyme';

function setup({ communitySummary }) {
  const props = {
    communitySummary,
  };
  const output = shallow(<CommunityAbout {...props} />);
  return { props, output };
}

describe('CommunityAbout component', () => {
  it('renders the summary', () => {
    const { output } = setup({ communitySummary: 'Hi!' });
    expect(output.text()).to.include('Hi!');
  });
});
