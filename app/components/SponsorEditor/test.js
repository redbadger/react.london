import React from 'react';
import { shallow } from 'enzyme';
import SponsorEditor from './SponsorEditor';

function setup(remove = () => {}) {
  const props = {
    sponsor: 'Dave Smith',
    index: 1,
    sponsors: { remove },
    textField: () => {},
  };
  const output = shallow(<SponsorEditor {...props} />);
  return { props, output };
}


describe('SponsorEditor', () => {
  it('includes a button to remove the sponsor', () => {
    let cbArg;
    const removeSponsor = (x) => { cbArg = x; };
    const { props, output } = setup(removeSponsor);
    output.find('button').simulate('click');
    expect(cbArg).to.equal(props.index);
  });

  it('renders a heading', () => {
    const { output } = setup();
    expect(output.text()).to.contain('Sponsor 2');
  });

  it('renders a heading', () => {
    const { output } = setup();
    expect(output.text()).to.contain('Sponsor 2');
  });

  it('renders a Field for each sponsor field', () => {
    const { output } = setup();
    const fieldNames = output.find('Field').map(el => el.prop('name')).sort();
    expect(fieldNames).to.deep.equal([
      'Dave Smith.name',
      'Dave Smith.picture',
      'Dave Smith.url',
    ]);
  });
});
