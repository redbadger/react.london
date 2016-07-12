import React from 'react';
import CommunityAbout from '.';
import { shallow } from 'enzyme';

function setup({ summary }) {
  const props = {
    summary,
  };
  const output = shallow(<CommunityAbout {...props} />);
  return { props, output };
}

describe('CommunityAbout component', () => {
  it('renders the summary', () => {
    const { output } = setup({ summary: 'Hi!' });
    expect(output.text()).to.include('Hi!');
  });
});
