import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview';

const defaultSpeakers = [
  { name: "speaker a" },
  { name: "speaker b" },
  { name: "speaker c" },
];

const defaultSponsors = [
  { name: "sponsor a" },
  { name: "sponsor b" },
];

function setup(meetupArgs = {}) {
  const props = {
    text: {
      about: {
        aboutProp: 'about prop',
      },
      meetup: {
        speakers: defaultSpeakers,
        sponsors: defaultSponsors,
        ...meetupArgs,
      },
    },
  };
  const output = shallow(<Preview {...props} />);
  return { props, output }
}

describe('Preview', () => {
  it('renders About', () => {
    const { props, output } = setup();
    expect(output.find('About').props()).to.deep.equal(props.text.about);
  });

  it('renders Meetup', () => {
    const { props, output } = setup();
    expect(output.find('Meetup').props()).to.deep.equal(props.text.meetup);
  });

  describe('SponsorPreview rendering', () => {
    it('renders each sponsor', () => {
      const { props, output } = setup();
      const sponsorProps = output.find('.sponsors').children().map(e => e.props());
      expect(sponsorProps).to.deep.equal(props.text.meetup.sponsors);
    });

    it('renders OK when no sponsors passed', () => {
      setup({ sponsors: undefined });
    });
  });

  describe('SponsorPreview rendering', () => {
    it('renders each speaker', () => {
      const { props, output } = setup();
      const speakerProps = output.find('.speakers').children().map(e => e.props());
      expect(speakerProps).to.deep.equal(props.text.meetup.speakers);
    });

    it('renders OK when no speakers passed', () => {
      setup({ speakers: undefined });
    });
  });
});
