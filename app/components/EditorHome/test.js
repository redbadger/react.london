import EditorHome from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('EditorHome component', () => {
  it('renders successfully', () => {
    shallow(<EditorHome />);
  });
});
