import React from 'react';
import NavigationBar from '.';
import { shallow } from 'enzyme';

describe('NavigationBar component', () => {
  it('renders successfully', () => {
    shallow(<NavigationBar />);
  });

  it('renders the correct number of links', () => {
    const output = shallow(<NavigationBar />);
    expect(output.find('li').length).to.equal(2);
  });
});
