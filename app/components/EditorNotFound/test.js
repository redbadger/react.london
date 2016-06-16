import EditorNotFound from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('EditorNotFound component', () => {
  it('renders successfully', () => {
    shallow(<EditorNotFound />);
  });
});
