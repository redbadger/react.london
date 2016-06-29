import React from 'react';
import Hero from '.';
import { shallow } from 'enzyme';

describe('Hero component', () => {
  it('renders successfully', () => {
    shallow(<Hero />);
  });
});
