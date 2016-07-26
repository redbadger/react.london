import React from 'react';
import { shallow } from 'enzyme';
import EventDetails from '.';
import EventSchedule from '../EventSchedule';
import EventSponsors from '../EventSponsors';

describe('EventDetails component', () => {
  it('renders successfully', () => {
    const wrapper = shallow(<EventDetails />);
    expect(wrapper).to.be.ok();
  });

  it('renders two EventSchedule & EventSponsors', () => {
    const props = {
      eventSchedule: [
        {
          time: '18:30',
          text: 'Doors open for pizza and beers',
        },
        {
          time: '19:00',
          text: 'Intro from Stu',
        },
        {
          time: '19:10',
          text: '2 or 3 speakers each with 20 minutes to talk followed by Q&A.',
        },
        {
          time: '20:30',
          text: 'Everyone is welcome to stay for another drink',
        },
      ],
      eventSponsors: [
        {
          websiteURL: 'https://red-badger.com',
          imageURL: '/img/SVG/Badger_Roundel.svg',
        },
        {
          websiteURL: 'https://facebook.com',
          imageURL: 'http://blog.adstage.io/wp-content/uploads/2014/07/facebook-logo.png',
        },
      ],
    };

    const wrapper = shallow(<EventDetails {...props} />);
    const shallowSchedule = wrapper.find(EventSchedule);
    const shallowSponsors = wrapper.find(EventSponsors);

    expect(shallowSchedule).to.have.length(1);
    expect(shallowSchedule.props()).to.deep.equal({ eventSchedule: props.eventSchedule });
    expect(shallowSponsors).to.have.length(1);
    expect(shallowSponsors.props()).to.deep.equal({ eventSponsors: props.eventSponsors });
  });
});
