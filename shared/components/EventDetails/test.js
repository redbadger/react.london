import React from 'react';
import { shallow } from 'enzyme';
import EventDetails from '.';
import EventSchedule from '../EventSchedule';
import EventSponsors from '../EventSponsors';

describe('EventDetails component', () => {
  it('renders successfully', () => {
    const wrapper = shallow(<EventDetails />);
    expect(wrapper).to.be.ok;
  });

  it('renders two EventSchedule & EventSponsors', () => {
    const props = {
      eventSchedule: [
        { time: 'foo', text: 'bar' },
        { time: 'bar', text: 'foo' },
      ],
      eventSponsors: [
        { companyURL: 'foo.com', imageURL: 'bar.com/img'}
      ]
    };
    const schedules = [{'foo': 'bar'}, {'bar': 'foo'}];
    const sponsors = [{'foo': 'bar'}, {'bar': 'foo'}];

    const wrapper = shallow(<EventDetails {...props} />);
    const shallowSchedule = wrapper.find(EventSchedule);
    const shallowSponsors = wrapper.find(EventSponsors);

    expect(shallowSchedule).to.have.length(1);
    expect(shallowSchedule.props()).to.deep.equal({eventSchedule: props.eventSchedule});
    expect(shallowSponsors).to.have.length(1);
    expect(shallowSponsors.props()).to.deep.equal({eventSponsors: props.eventSponsors});
  });
});
