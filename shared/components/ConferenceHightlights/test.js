import React from 'react';
import { mount } from 'enzyme';
import ConferenceHighlights from '.';

describe('ConferenceHighlights component', () => {
  it('stage 1 renders successfully with no error', () => {
    mount(<ConferenceHighlights />);
  });

  it('stage 2 renders successfully with no error', () => {
    mount(<ConferenceHighlights finalStage />);
  });
});
