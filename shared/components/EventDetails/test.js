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
    const schedules = [{'foo': 'bar'}, {'bar': 'foo'}];
    const sponsors = [{'foo': 'bar'}, {'bar': 'foo'}];

    const wrapper = shallow(<EventDetails eventSchedule={schedules} eventSponsors={sponsors} />);
    const shallowSchedule = wrapper.find(EventSchedule);
    const shallowSponsors = wrapper.find(EventSponsors);

    expect(shallowSchedule).to.have.length(1);
    expect(shallowSchedule.props()).to.deep.equal({eventSchedule: schedules});
    expect(shallowSponsors).to.have.length(1);
    expect(shallowSponsors.props()).to.deep.equal({eventSponsors: sponsors});
  });
});
