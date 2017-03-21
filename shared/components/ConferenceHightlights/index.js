import React from 'react';

import Instagram from './instagram';
import Tweet from './tweet';
import Youtube from './youtube';
import SlideShare from './slideshare';
import Flickr from './flickr';

const hashtag = 'ReactLondon2017';

const data = {
  instagram: [
    {
      href: 'https://www.instagram.com/p/BRn8_yajwFR/?taken-by=itsdougthepug',
      src: 'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/17267595_263928080729375_8631151348735279104_n.jpg',
      name: 'Doug The Pug',
    },
    {
      href: 'https://www.instagram.com/p/BRn8_yajwFR/?taken-by=itsdougthepug',
      src: 'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/17266112_1846047625667173_5961802609898553344_n.jpg',
      name: 'Doug The Pug',
    },
    {
      href: 'https://www.instagram.com/p/BRn8_yajwFR/?taken-by=itsdougthepug',
      src: 'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/17333132_1812017895790889_7291888165390909440_n.jpg',
      name: 'Doug The Pug',
    },
  ],
  youtube: [
    {
      href: 'https://www.youtube.com/',
      src: 'https://res.cloudinary.com/red-badger-assets/image/upload/v1486565031/react-london-2017/jani_evakallio_photo.jpg',
      name: 'Jani Eväkallio',
      company: 'Formidable Labs',
      title: 'Lightning talk: Offline for the greater good',
    },
    {
      href: 'https://www.youtube.com/',
      src: 'https://pbs.twimg.com/profile_images/829282867020722177/el35E312.jpg',
      name: 'Anna Doubkova',
      company: 'Red Badger',
      title: 'Lightning talk: Offline for the greater good',
    },
    {
      href: 'https://www.youtube.com/',
      src: 'https://res.cloudinary.com/red-badger-assets/image/upload/v1486054146/react-london-2017/Ken_Wheeler_small.jpg.jpg', // eslint-disable-line
      name: 'Ken Wheeler',
      company: 'Formidable Labs',
      title: 'Lightning talk: Offline for the greater good',
    },
  ],
  slideshare: [
    {
      href: 'https://www.slideshare.com/',
      src: '',
      name: 'Jani Eväkallio',
      company: 'Formidable Labs',
      title: 'Lightning talk: Offline for the greater good',
    },
    {
      href: 'https://www.slideshare.com/',
      src: '',
      name: 'Anna Doubkova',
      company: 'Red Badger',
      title: 'Lightning talk: Offline for the greater good',
    },
    {
      href: 'https://www.slideshare.com/',
      src: '',
      name: 'Ken Wheeler',
      company: 'Formidable Labs',
      title: 'Lightning talk: Offline for the greater good',
    },
  ],
  flickr: [
    {
      href: '',
      src: '',
    },
    {
      href: '',
      src: '',
    },
    {
      href: '',
      src: '',
    },
    {
      href: '',
      src: '',
    },
    {
      href: '',
      src: '',
    },
    {
      href: '',
      src: '',
    },
  ],
  twitter: [
    {
      href: 'http://twitter.com',
      username: 'shorttweet',
      name: 'Ken Wheeler',
      content: '...Where the beer tastes like absolute shit.',
    },
    {
      href: 'http://twitter.com',
      username: 'longtweet',
      name: 'Katie Fenn',
      content: 'New article: building a static website with Gulp and React http://www.katiefenn.co.uk/building-a-static-website-with-react, right? Wrong!',
    },
    {
      href: 'http://twitter.com',
      username: 'katie_fenn',
      name: 'Katie Fenn',
      content: 'New article: building a static website with Gulp and React http://www.katiefenn.co.uk/building-a-static-website-with-react',
    },
  ],
};
const ConferenceHighlights = ({ finalStage }) => (
  <div className="ConferenceHighlights block">
    <div className="content">
      <h2>Here are some highlights from the day. {finalStage ? '' : '(More coming soon)'}</h2>

      {!finalStage && data.instagram.length &&
        <div>
          <h3 className="ConferenceHighlights__header-instagram">Photos on Instagram</h3>
          <div className="ConferenceHighlights__gallery">
            {data.instagram.map(attrs => <Instagram {...attrs} />)}
          </div>
          <a
            className="ConferenceHighlights__see-more-btn"
            href="https://instagram.com/reactlondon_"
            target="_blank"
            rel="noopener"
            title="React London Instagram (opens in a new window)"
          >
            See more photos
          </a>
          <hr />
        </div>}

      {finalStage &&
        <div>
          {data.youtube.length &&
            <div>
              <h3 className="ConferenceHighlights__header-youtube">
                Playlist of the talks on Youtube
              </h3>
              <div className="ConferenceHighlights__gallery">
                {data.youtube.map(attrs => <Youtube {...attrs} />)}
              </div>
              <a
                className="ConferenceHighlights__see-more-btn"
                href="https://instagram.com/reactlondon_"
                target="_blank"
                rel="noopener"
                title="Playlist of the talks on Youtube (opens in a new window)"
              >
                See playlist
              </a>
              <hr />
            </div>}

          {data.slideshare.length &&
            <div>
              <h3 className="ConferenceHighlights__header-linkedin">
                Slides from each talk on SlideShare
              </h3>
              <div className="ConferenceHighlights__gallery">
                {data.slideshare.map(attrs => <SlideShare {...attrs} />)}
              </div>
              <a
                className="ConferenceHighlights__see-more-btn"
                href="https://www.slideshare.net/ReactLondon2017"
                target="_blank"
                rel="noopener"
                title="Slides from each talk on SlideShare (opens in a new window)"
              >
                See all slides
              </a>
              <hr />
            </div>}

          {data.flickr.length &&
            <div>
              <h3 className="ConferenceHighlights__header-flickr">Photos on Flickr</h3>
              <div className="ConferenceHighlights__gallery">
                {data.flickr.map(attrs => <Flickr {...attrs} />)}
              </div>
              <a
                className="ConferenceHighlights__see-more-btn"
                href="https://www.flickr.com/photos/148731833@N05/"
                target="_blank"
                rel="noopener"
                title="Photos from the conference on Flickr (opens in a new window)"
              >
                See all photos
              </a>
              <hr />
            </div>}
        </div>}

      {data.twitter.length &&
        <div>
          <h3 className="ConferenceHighlights__header-twitter">
            Conversation on Twitter with #{hashtag}
          </h3>
          <div className="ConferenceHighlights__gallery">
            {data.twitter.map(attrs => <Tweet {...attrs} />)}
          </div>
          <a
            className="ConferenceHighlights__see-more-btn"
            href={`https://twitter.com/search?q=%23${hashtag}`}
            target="_blank"
            rel="noopener"
            title={`Twitter search for #${hashtag} (opens in a new window)`}
          >
            #{hashtag}
          </a>
        </div>}
    </div>
  </div>
);
ConferenceHighlights.propTypes = {
  finalStage: React.PropTypes.bool,
};
export default ConferenceHighlights;
