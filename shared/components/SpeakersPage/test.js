import React from 'react';
import SpeakersPage from '.';
import { shallow } from 'enzyme';

describe('SpeakersPage component', () => {
  it('can render', () => {
    shallow(<SpeakersPage />);
  });
});
