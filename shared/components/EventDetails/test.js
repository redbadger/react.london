import React from 'react';
import { shallow } from 'enzyme';
import EventDetails from '.';
import EventSchedule from '../EventSchedule';
import EventSponsors from '../EventSponsors';
import {eventSchedule, eventSponsors } from './mock-data';

describe('EventDetails component', () => {
  it('renders successfully', () => {
    const wrapper = shallow(<EventDetails />);
    expect(wrapper).to.be.ok();
  });

  it('renders two EventSchedule & EventSponsors', () => {
    const props = {
      eventSchedule: [
        {
          time: 'Why React is fooBar, and it is two lines, and how',
          text: 'bar',
        },
        {
          time: 'bar',
          text: 'foo',
        },
      ],
      eventSponsors: [
        { companyURL: 'foo.com', imageURL: 'bar.com/img' },
      ],
    };

    const wrapper = shallow(<EventDetails {...props} />);
    const shallowSchedule = wrapper.find(EventSchedule);
    const shallowSponsors = wrapper.find(EventSponsors);

    expect(shallowSchedule).to.have.length(1);
    expect(shallowSchedule.props()).to.deep.equal({ eventSchedule });
    expect(shallowSponsors).to.have.length(1);
    expect(shallowSponsors.props()).to.deep.equal({ eventSponsors });
  });
});
