import React from 'react';
import EventStatus, { StatusButton, getActionLink } from '.';
import { shallow } from 'enzyme';

const props = {
  ticketsAvailable: true,
  externalLinks: [
    {
      title: 'foo baz',
      url: 'foobaz.com',
      type: 'OTHER',
    },
  ],
  startDateTime: {
    iso: '2016-07-26T08:30:00+0000',
  },
  endDateTime: {
    iso: '2016-07-26T08:30:00+0000',
  },
};

describe('EventStatus component', () => {
  it('renders OK with all props', () => {
    shallow(<EventStatus {...props} />);
  });

  it('renders OK without props', () => {
    shallow(<EventStatus />);
  });
});

describe('getActionLink', () => {
  let externalLinks;

  beforeEach(() => {
    externalLinks = [
      {
        title: 'Baz',
        url: 'baz.com',
        type: null // here we test that a null type is handled
      },
      {
        title: 'Foo',
        url: 'foo.com',
        type: 'EVENT',
      },
      {
        title: 'Boz',
        url: 'boz.com',
        type: 'EVENT',
      },
      {
        title: 'Bar',
        url: 'bar.com',
        type: 'STREAM',
      },
    ];
  });

  it('returns the first found link URL when multiple exist', () => {
    expect(getActionLink(externalLinks, 'EVENT'))
      .to.deep.equal({
        title: 'Foo',
        url: 'foo.com',
        type: 'EVENT',
      });
  });

  it('returns undefined when nothing is found', () => {
    expect(getActionLink(externalLinks, 'FOO'))
      .to.equal(undefined);
  });

  it('handles an empty list of externalLinks being passed in', () => {
    expect(getActionLink([], 'EVENT'))
      .to.equal(undefined);
  });

  it('handles a falsy list of externalLinks being passed in', () => {
    expect(getActionLink(null, 'EVENT'))
      .to.equal(undefined);
  });
});

describe('StatusButton component', () => {
  it('renders a disabled StatusButton correctly', () => {
    const inactiveButtonProps = {
      externalLinks: [
        {
          title: 'foo baz',
          url: 'foobaz.com',
          type: 'OTHER',
        },
      ],
    };
    const wrapper = shallow(<StatusButton {...inactiveButtonProps} />);
    const linkProps = wrapper.find('a').props();

    expect(linkProps.href).to.equal('#'); // we don't have a url
    expect(linkProps.children).to.equal('');
    expect(linkProps.className).to.equal('EventStatus__booking-btn EventStatus__booking-btn--disabled');;
  });

  it('renders an active StatusButton correctly', () => {
    const activeButtonProps = {
      externalLinks: [
        {
          title: 'foo baz',
          url: 'foobaz.com',
          type: 'EVENT',
        },
      ],
    };
    const wrapper = shallow(<StatusButton {...activeButtonProps} />);
    const linkProps = wrapper.find('a').props();

    expect(linkProps.href).to.equal('foobaz.com');
    expect(linkProps.children).to.equal('foo baz');
    expect(linkProps.className).to.equal('EventStatus__booking-btn EventStatus__booking-btn--active');
  });
});
