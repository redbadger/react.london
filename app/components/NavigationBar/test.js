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

  it('renders the navbar with the correct class name', () => {
    const output = shallow(<NavigationBar page="Conference" />);
    expect(output.props().className.indexOf('--Conference')).to.not.equal(-1);
  });
});
