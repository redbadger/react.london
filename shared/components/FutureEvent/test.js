import React from 'react';
import FutureEvent, { placeholderText } from '.';
import { shallow } from 'enzyme';

describe('FutureEvent component', () => {
  it('renders OK when props passed', () => {
    const props = {
      title: 'The title',
      location: {
        address: 'The location',
      },
      startDateTime: {
        iso: '2016-08-10',
      },
    };
    const el = shallow(<FutureEvent {...props} />);
    expect(el.find('.FutureEvent__title').text()).to.equal('The title');
    expect(el.find('.FutureEvent__location').text()).to.equal('The location');
    expect(el.find('.FutureEvent__datetime').text()).to.equal(
      'Wednesday, 10th August 2016'
    );
  });

  it('renders nothing when title is missing', () => {
    const props = {
      location: {
        address: 'The location',
      },
      startDateTime: {
        iso: '2016-08-10',
      },
    };
    const el = shallow(<FutureEvent {...props} />);
    expect(el.html()).to.equal(null);
  });

  it('has fallback text for date', () => {
    const props = {
      title: 'The title',
      location: {
        address: 'The location',
      },
    };
    const el = shallow(<FutureEvent {...props} />);
    expect(el.find('.FutureEvent__datetime').text()).to.equal(placeholderText);
  });

  it('has fallback text for location', () => {
    const props = {
      title: 'The title',
      startDateTime: {
        iso: '2016-08-10',
      },
    };
    const el = shallow(<FutureEvent {...props} />);
    expect(el.find('.FutureEvent__location').text()).to.equal(placeholderText);
  });


  it('adds a class for the eventType', () => {
    const props = {
      title: 'The title',
      startDateTime: {
        iso: '2016-08-10',
      },
      eventType: 'Dance ! Party',
    };
    const el = shallow(<FutureEvent {...props} />);
    expect(el.find('.FutureEvent').props().className).to.include('FutureEvent--Dance---Party');
  });
});
