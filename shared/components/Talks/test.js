import Speakers from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('Speakers component', () => {
  it('renders successfully with talks', () => {
    const props = {
      talks: [{}, {}],
    };
    shallow(<Speakers {...props} />);
  });

  it('renders successfully without talks', () => {
    const output = shallow(<Speakers />);
    expect(output.html()).to.equal(null);
  });
});
