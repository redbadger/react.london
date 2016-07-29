import React from 'react';
import EventStatus, { getActionLink, renderButton } from '.';
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

describe.only('getActionLink', () => {
  let externalLinks;

  beforeEach(() => {
    externalLinks = [
      {
        name: 'Baz',
        url: 'baz.com',
        type: null // here we test that a null type is handled
      },
      {
        name: 'Foo',
        url: 'foo.com',
        type: 'EVENT',
      },
      {
        name: 'Boz',
        url: 'boz.com',
        type: 'EVENT',
      },
      {
        name: 'Bar',
        url: 'bar.com',
        type: 'STREAM',
      },
    ];
  });

  it('returns the first found link URL when multiple exist', () => {
    expect(getActionLink(externalLinks, 'EVENT'))
      .to.equal('foo.com');
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
