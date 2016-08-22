import React from 'react';
import { shallow } from 'enzyme';
import ConferencePartners from '.';

describe('ConferencePartners component', () => {
  it('renders successfully with no props', () => {
    shallow(<ConferencePartners />);
  });
});
