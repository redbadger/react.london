import React from 'react';
import JobsSection from '.';
import { shallow } from 'enzyme';

const allProps = {
  level: 'Pink',
  talks: [],
};

describe('JobsSection component', () => {
  it('does not render with no partners', () => {
    const props = {
      level: allProps.level,
    };
    const output = shallow(<JobsSection {...props} />);
    expect(output.html()).to.equal(null);
  });

  it('renders OK with partners missing props', () => {
    const props = {
      ...allProps,
      talks: [{}],
    };
    shallow(<JobsSection {...props} />);
  });
});
