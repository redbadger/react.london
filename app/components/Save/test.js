import React from 'react';
import { shallow } from 'enzyme';
import Save from './Save';

function setup(saveFunction = () => {}) {
  const props = {
    content: 'Lorizzel ipsizzle',
    saveFunction,
  };
  const output = shallow(<Save {...props} />);
  return { props, output };
}

describe('Save', () => {
  it('calls saveFunction with content on click', () => {
    let savedContent;
    const saveFunction = x => { savedContent = x; };
    const { props, output } = setup(saveFunction);
    output.find('button').simulate('click');
    expect(savedContent).to.equal(props.content);
  });
});
