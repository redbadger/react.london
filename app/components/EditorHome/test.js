import EditorHome from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('EditorHome component', () => {
  const props = {
    eventIDs: ['1', '2', '3'],
  };

  it('renders successfully, with event links', () => {
    const el = shallow(<EditorHome {...props} />);
    const links = el.find('EventLink');
    expect(links).to.have.length(4);
  });
});
