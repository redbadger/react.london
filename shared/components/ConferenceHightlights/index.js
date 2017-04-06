import React from 'react';

import Instagram from './instagram';
import Tweet from './tweet';
import Youtube from './youtube';
import SlideShare from './slideshare';
import Flickr from './flickr';

const hashtag = 'ReactLondon';

const data = {
  instagram: [
    // {
    //   href: 'https://www.instagram.com/p/BRn8_yajwFR/?taken-by=itsdougthepug',
    //   src: 'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/17267595_263928080729375_8631151348735279104_n.jpg',
    //   name: 'Doug The Pug',
    // },
    // {
    //   href: 'https://www.instagram.com/p/BRn8_yajwFR/?taken-by=itsdougthepug',
    //   src: 'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/17266112_1846047625667173_5961802609898553344_n.jpg',
    //   name: 'Doug The Pug',
    // },
    // {
    //   href: 'https://www.instagram.com/p/BRn8_yajwFR/?taken-by=itsdougthepug',
    //   src: 'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/17333132_1812017895790889_7291888165390909440_n.jpg',
    //   name: 'Doug The Pug',
    // },
  ],
  youtube: [
    {
      href: 'https://www.youtube.com/watch?v=ziAShzxAVKY&t=12s',
      src: 'https://res.cloudinary.com/red-badger-assets/image/upload/v1474453522/react-london-2017/Christopher_Chedeau.jpg',
      name: 'Christopher Chedeau',
      company: 'Facebook',
      title: 'Javascript code formatting',
    },
    {
      name: 'Coming Soon - Andrey Sitnik',
      company: 'Evil Martians',
      title: 'Logux, a new approach to client-server communication',
    },
    {
      name: 'Coming Soon - Cheng Lou',
      company: 'Facebook',
      title: 'What\'s in a language?',
    },
  ],
  slideshare: [
    {
      href: 'https://www.slideshare.net/ReactLondon2017/realtime-webpack-pushing-ondemand-bundling-to-the-limits-by-oliver-woodings',
      src: 'https://res.cloudinary.com/red-badger-assets/image/upload/v1486728551/react-london-2017/11782311_10206485469192198_6948163418787834571_o.jpg',
      name: 'Oliver Woodings',
      company: 'Qubit',
      title: 'Lightning talk: Realtime Webpack - Pushing on-demand bundling to the limits',
    },
    {
      href: 'https://www.slideshare.net/ReactLondon2017/offline-for-the-greater-good-by-jani-evkallio',
      src: 'https://res.cloudinary.com/red-badger-assets/image/upload/v1486565031/react-london-2017/jani_evakallio_photo.jpg',
      name: 'Jani Eväkallio',
      company: 'Formidable Labs',
      title: 'Lightning talk: Offline for the greater good',
    },
    {
      href: 'https://www.slideshare.net/ReactLondon2017/nextjs-in-production-by-jasdeep-lalli',
      src: 'https://res.cloudinary.com/red-badger-assets/image/upload/v1486653616/react-london-2017/Jaz_Lalli_small.jpg',
      name: 'Jasdeep Lalli',
      company: 'Deliveroo',
      title: 'Lightning talk: Next.js in production',
    },
  ],
  flickr: [
    {
      href: 'https://www.flickr.com/photos/148731833@N05/33694503386/',
      src: '/img/JPG/post-conf-2017-01.jpg',
    },
    {
      href: 'https://www.flickr.com/photos/148731833@N05/32921976263/',
      src: '/img/JPG/post-conf-2017-02.jpg',
    },
    {
      href: 'https://www.flickr.com/photos/148731833@N05/32921981233/',
      src: '/img/JPG/post-conf-2017-03.jpg',
    },
  ],
  twitter: [
    {
      href: 'https://twitter.com/elibelly/status/846689763251884032',
      username: 'elibelly',
      name: 'Eli Schutze Ramirez‏',
      content: "'Offline support democratises internet usage' @jevakallio we have to think about emerging markets!! ✊#reactlondon", // eslint-disable-line max-len
    },
    {
      href: 'https://twitter.com/mike20/status/846720660311347200',
      username: 'mike20',
      name: 'Mike Evans',
      content: 'Oooh, @mxstbr just announced polished, a SASS-like toolset for writing styles at #ReactLondon', // eslint-disable-line max-len
    },
    {
      href: 'https://twitter.com/_calumjames/status/846747604201459712',
      username: '_calumjames',
      name: 'Calum James‏',
      content: "Great insight from @leeb at #ReactLondon on progressive web apps vs. native, drawing on experience from @facebook's iOS HTML5 app experiment", // eslint-disable-line max-len
    },
  ],
};
const ConferenceHighlights = ({ finalStage }) => (
  <div className="ConferenceHighlights block">
    <div className="content">
      <h2>
        Here are some highlights from the day.{' '}
        {finalStage ? '' : '(More coming soon)'}
      </h2>

      {!finalStage &&
        data.instagram.length &&
        <div>
          <h3 className="ConferenceHighlights__header-instagram">
            Photos on Instagram
          </h3>
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
          {data.youtube.length > 0 &&
            <div>
              <h3 className="ConferenceHighlights__header-youtube">
                Playlist of the talks on Youtube
              </h3>
              <div className="ConferenceHighlights__gallery">
                {data.youtube.map(attrs => <Youtube {...attrs} />)}
              </div>
              <a
                className="ConferenceHighlights__see-more-btn"
                href="https://www.youtube.com/channel/UCV4LIEkC0S9KUAPDm2g4mNQ"
                target="_blank"
                rel="noopener"
                title="Playlist of the talks on Youtube (opens in a new window)"
              >
                See playlist
              </a>
              <hr />
            </div>}

          {data.slideshare.length > 0 &&
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
              <h3 className="ConferenceHighlights__header-flickr">
                Photos on Flickr
              </h3>
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
