import React from 'react';
import NavigationBar from '.';
import { shallow } from 'enzyme';

describe('NavigationBar component', () => {
  it('renders the correct number of links', () => {
    const output = shallow(<NavigationBar page="Conference" />);
    expect(output.find('li').length).to.equal(2);
  });

  it('renders the navbar with the correct class name', () => {
    const conf = shallow(<NavigationBar page="Conference" />);
    expect(conf.props().className).to.include('--Conference');
    const comm = shallow(<NavigationBar page="Community" />);
    expect(comm.props().className).to.include('--Community');
  });
});
