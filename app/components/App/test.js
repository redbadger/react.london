import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

function setup() {
  const output = shallow(<App />);
  return { output };
}

describe('App', () => {
  it('renders successfully', () => {
    setup();
  });
});
