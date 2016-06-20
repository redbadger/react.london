import React from 'react';
import Sponsor from '.';
import { shallow } from 'enzyme';


describe('Speaker component', () => {
  it('can render without social links', () => {
    const props = {
      websiteURL: 'https://foo.bar/baz',
      imageURL: 'https://foo.bar/baz.png',
    };
    shallow(<Sponsor {...props} />);
  });
});
