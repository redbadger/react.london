import React from 'react';
import { shallow } from 'enzyme';
import ConferenceEditor from '.';

describe('ConferenceEditor component', () => {
  it('renders successfully', () => {
    shallow(<ConferenceEditor />);
  });
});
