import React from 'react';
import FutureEvents from '.';
import { shallow } from 'enzyme';

describe('FutureEvents component', () => {
  it('renders a FutureEvent per events', () => {
    const element = shallow(<FutureEvents events={[{}, {}]} />);
    expect(element.find('FutureEvent')).to.have.length(2);
  });

  it('renders nothing if no events', () => {
    const element = shallow(<FutureEvents events={[]} />);
    expect(element.html()).to.equal(null);
  });

  it('renders nothing if events not passed', () => {
    const element = shallow(<FutureEvents />);
    expect(element.html()).to.equal(null);
  });
});
