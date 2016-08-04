import React from 'react';
import FutureEvent, { placeholderText } from '.';
import { shallow } from 'enzyme';

describe('FutureEvent component', () => {
  it('renders OK when props passed', () => {
    const props = {
      title: 'The title',
      date: 'The date',
      location: 'The location',
    };
    const el = shallow(<FutureEvent {...props} />);
    expect(el.find('.FutureEvent__title').text()).to.equal('The title');
    expect(el.find('.FutureEvent__datetime').text()).to.equal('The date');
    expect(el.find('.FutureEvent__location').text()).to.equal('The location');
  });

  it('renders nothing when title is missing', () => {
    const props = {
      date: 'The date',
      location: 'The location',
    };
    const el = shallow(<FutureEvent {...props} />);
    expect(el.html()).to.equal(null);
  });

  it('has fallback text for date', () => {
    const props = {
      title: 'The title',
      location: 'The location',
    };
    const el = shallow(<FutureEvent {...props} />);
    expect(el.find('.FutureEvent__datetime').text()).to.equal(placeholderText);
  });

  it('has fallback text for location', () => {
    const props = {
      title: 'The title',
      date: 'The date',
    };
    const el = shallow(<FutureEvent {...props} />);
    expect(el.find('.FutureEvent__location').text()).to.equal(placeholderText);
  });
});
