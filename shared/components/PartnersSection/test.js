import React from 'react';
import ParterSection from '.';
import { shallow } from 'enzyme';

const allProps = {
  title: 'Title',
  level: 'Pink',
  talks: [],
};

describe('ParterSection component', () => {
  it('does not render with no partners', () => {
    const props = {
      title: allProps.title,
      level: allProps.level,
    };
    const output = shallow(<ParterSection {...props} />);
    expect(output.html()).to.equal(null);
  });

  it('renders OK with partners missing props', () => {
    const props = {
      ...allProps,
      talks: [{}],
    };
    shallow(<ParterSection {...props} />);
  });
});
