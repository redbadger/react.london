/* eslint-disable max-len */

import React from 'react';
import SpeakerList from '.';
import { shallow } from 'enzyme';

const speakers = [
  {
    id: 'V8cFyioAACsAd0yt',
    name: 'Christopher Chedeau',
    company: 'Facebook',
    twitterHandle: 'Vjeux',
    githubHandle: 'Vjeux',
    blogURL: 'http://blog.vjeux.com/',
    imageURL: '',
    bio: [
      {
        type: 'paragraph',
        text: 'With two paragraphs',
      },
      {
        type: 'paragraph',
        text: 'Full description',
      },
    ],
    talks: [],
  },
  {
    id: 'V6IbaywAACsAN-X7',
    name: 'Luca Mezzalira',
    company: 'Massive Interactive',
    twitterHandle: 'lucamezzalira',
    githubHandle: 'lucamezzalira',
    blogURL: null,
    imageURL: '//res.cloudinary.com/red-badger-assets/image/upload/v1470318218/speaker3_zkq7nl.png',
    bio: null,
    talks: [],
  },
];

describe('SpeakerList component', () => {
  it('can render', () => {
    shallow(<SpeakerList speakers={speakers} />);
  });

  it('returns null if no speakers are provided', () => {
    const wrapper = shallow(<SpeakerList />);
    expect(wrapper.text()).to.equal('');
  });
});
